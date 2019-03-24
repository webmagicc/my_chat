from channels.generic.websocket import AsyncJsonWebsocketConsumer


class BaseChatConsumer(AsyncJsonWebsocketConsumer):
    login_required = False

    async def _send_message(self, data, event=None):
        await self.send_json(content={'status': 'ok', 'data': data, 'event': event})

    async def _throw_error(self, data, event=None):
        await self.send_json(content={'status': 'error', 'data': data, 'event': event})

    async def connect(self):
        await self.accept()
        if self.login_required:
            if 'user' not in self.scope or self.scope['user'].is_anonymous:
                await self._throw_error({'detail': 'Authorization failed.'})
                await self.close(code=1000)
                return

    async def event_undefined(self, message):
        event = message['event']
        await self._throw_error({'detail': f'Unknown event {event}'})

    async def receive_json(self, content, **kwargs):
        msg = self.parse_content(content)
        if msg:
            event = msg['event'].replace('.', '_')
            method = getattr(self, f'event_{event}', self.event_undefined)
            method(msg)
        else:
            await self._throw_error({'detail': 'Invalid message'})

    @classmethod
    async def parse_content(cls, content):
        if isinstance(content, dict) and isinstance(content.get('event'), str)and \
                isinstance(content.get('data'), dict):
            return content


