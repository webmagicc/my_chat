import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import (WebsocketConsumer, AsyncWebsocketConsumer,
                                        JsonWebsocketConsumer, AsyncJsonWebsocketConsumer)
from channels.consumer import SyncConsumer, AsyncConsumer
from channels.exceptions import StopConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        async_to_sync(self.channel_layer.group_add)(self.room_name, self.channel_name)
        self.accept()

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(self.room_name, self.channel_name)

    def receive(self, text_data=None, bytes_data=None):
        async_to_sync(self.channel_layer.group_send)(
            self.room_name,
            {
                'type': 'chat.message',
                'text': text_data
            }
        )

    def chat_message(self, event):
        self.send(text_data=event['text'])



class AsyncChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, code):
        pass

    async def receive(self, text_data=None, bytes_data=None):
        json_data = json.loads(text_data)
        message = json_data['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))


class BaseSyncConsumer(SyncConsumer):
    def websocket_connect(self, event):
        self.send({
            "type": "websocket.accept"
        })

    def websocket_receive(self, event):
        self.send({
            "type": "websocket.send",
            "text": event['text']
        })

    def websocket_disconnect(self):
        raise StopConsumer()


class BaseAsyncConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        await self.send({
            "type": "websocket.accept"
        })

    async def websocket_receive(self, event):
        await self.send({
            "type": "websocket.send",
            "text": event['text']
        })


class ChatJsonConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, code):
        pass

    def receive_json(self, content, **kwargs):
        self.send_json(content=content)

    @classmethod
    def encode_json(cls, content):
        return super().encode_json(content)

    @classmethod
    def decode_json(cls, text_data):
        return super().decode_json(text_data)


class ChatAsyncJsonConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, code):
        pass

    async def receive_json(self, content, **kwargs):

        await self.send_json(content=content)

    @classmethod
    async def encode_json(cls, content):
        return await super().encode_json(content)

    @classmethod
    async def decode_json(cls, text_data):
        return await super().decode_json(text_data)

