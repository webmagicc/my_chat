from channels.generic.websocket import AsyncJsonWebsocketConsumer


class MyMiddlewareConsumer(AsyncJsonWebsocketConsumer):
    async def receive_json(self, content, **kwargs):
        for k, v in self.scope.items():
            print(k, v)
        await self.send_json(content={'my_var': str(self.scope.get('my_var', None))})

