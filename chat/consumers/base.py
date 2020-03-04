from functools import wraps
import traceback
from inspect import iscoroutinefunction

from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.exceptions import AcceptConnection, DenyConnection, StopConsumer
from django.core.mail import send_mail
from django.conf import settings
from asgiref.sync import sync_to_async


def scope_to_str(scope):
    res = '******* Scope ********* \n'
    headers = scope.pop('headers', None)
    for k, v in scope.items():
        res += f"{k} - {v} \n"
    res += "======== Headers =========\n"
    for k, v in headers:
        res += f"{k} - {v}\n"
    res += "******* End Scope ********\n"
    return res


def extract_instance_info(instance):
    res = '\n'
    res += f"Instance: {instance.__class__} \n"
    try:
        res += f"{instance.scope['url_route']['kwargs']}\n"
    except KeyError:
        pass
    res += scope_to_str(instance.scope)
    return res


def send_message(tb, instance):
    info = extract_instance_info(instance)
    text = f"{info} \n {tb}"
    send_mail(
        'WebSocket Error',
        text,
        settings.DEFAULT_FROM_EMAIL,
        ['your_email@example.com'],
        fail_silently=False,
    )


def log_exceptions(f):
    @wraps(f)
    async def wrapper(*args, **kwargs):
        instance = args[0]
        try:
            return await f(*args, **kwargs)
        except (AcceptConnection, DenyConnection, StopConsumer):
            raise
        except Exception as exception:
            tb = traceback.format_exc()
            await sync_to_async(send_message)(tb, instance)
            raise

    return wrapper


def log_consumer_exceptions(klass):
    for method_name, method in list(klass.__dict__.items()):
        if iscoroutinefunction(method):
            setattr(klass, method_name, log_exceptions(method))
    return klass


@log_consumer_exceptions
class BaseChatConsumer(AsyncJsonWebsocketConsumer):
    async def _group_send(self, data, event=None):
        data = {"type": "response.proxy", "data": data, "event": event}
        await self.channel_layer.group_send(self.channel, data)

    async def response_proxy(self, event):
        await self._send_message(event['data'], event=event.get('event'))

    async def _send_message(self, data, event=None):
        await self.send_json(content={"status": "ok", "data": data, "event": event})

    async def _throw_error(self, data, event=None):
        await self.send_json(content={"status": "error", "data": data, "event": event})

    async def connect(self):
        await self.accept()
        if 'user' not in self.scope or self.scope['user'].is_anonymous:
            await self._send_message({'detail': 'Authorization failed'})
            await self.close(code=1000)
            return

    async def receive_json(self, content, **kwargs):
        message = await self.parse_content(content)
        if message:
            event = message['event'].replace('.', '_')
            method = getattr(self, f'event_{event}', self.method_undefined)
            await method(message)
        else:
            await self._throw_error({'detail': 'Invalid message'})

    async def method_undefined(self, message):
        await self._throw_error({'detail': 'Unknown event'}, event=message['event'])

    @classmethod
    async def parse_content(cls, content):
        if isinstance(content, dict) and isinstance(content.get('event'), str) and \
                isinstance(content.get('data'), dict):
            return content


