import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import (WebsocketConsumer, AsyncWebsocketConsumer,
                                        JsonWebsocketConsumer, AsyncJsonWebsocketConsumer)
from channels.consumer import SyncConsumer, AsyncConsumer
from channels.exceptions import StopConsumer


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

    async def websocket_disconnect(self):
        raise StopConsumer()


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def receive(self, text_data=None, bytes_data=None):
        json_data = json.loads(text_data)
        message = json_data['message']
        self.send(text_data=json.dumps({
            'message': message
        }))


class AsyncChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):
        json_data = json.loads(text_data)
        message = json_data['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))


class ChatJsonConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

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

    async def receive_json(self, content, **kwargs):

        await self.send_json(content=content)

    @classmethod
    async def encode_json(cls, content):
        return await super().encode_json(content)

    @classmethod
    async def decode_json(cls, text_data):
        return await super().decode_json(text_data)

