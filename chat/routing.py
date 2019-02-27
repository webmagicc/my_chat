from django.conf.urls import url

from .consumers import ChatConsumer


websocket_urls = [
    url(r'^ws/chat/$', ChatConsumer),
]