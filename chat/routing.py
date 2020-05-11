from django.conf.urls import url

from chat.consumers import GroupChatConsumer, ChatConsumer, MyMiddlewareConsumer


websocket_urls = [
    url(r'^ws/groups/$', GroupChatConsumer),
    url(r'^ws/chat/(?P<group_id>\d+)/$', ChatConsumer),
    url(r'^ws/middleware/$', MyMiddlewareConsumer),
]