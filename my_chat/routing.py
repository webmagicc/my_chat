from channels.routing import ProtocolTypeRouter, URLRouter
from channels.sessions import SessionMiddlewareStack
from channels.auth import AuthMiddlewareStack

from chat.routing import websocket_urls
from chat.middleware import SimpleMiddlewareStack, MyMiddlewareStack


application = ProtocolTypeRouter({
    "websocket": SimpleMiddlewareStack(
        URLRouter(
            websocket_urls,
        )
    )
})


