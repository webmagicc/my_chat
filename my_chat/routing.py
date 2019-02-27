from channels.routing import ProtocolTypeRouter, URLRouter

from chat.routing import websocket_urls


application = ProtocolTypeRouter({
    "websocket": URLRouter(
        websocket_urls,
    )
})


