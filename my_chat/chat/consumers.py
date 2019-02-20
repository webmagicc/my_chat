import json

from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, code):
        pass

    def receive(self, text_data=None, bytes_data=None):
        json_data = json.loads(text_data)
        message = json_data['message']
        self.send(text_data=json.dumps({
            'message': message
        }))



