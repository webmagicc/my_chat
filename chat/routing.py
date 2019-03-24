from django.conf.urls import url




websocket_urls = [
    url(r'^ws/chat/$', ChatAsyncJsonConsumer),
    url(r'^ws/chat/(?P<room_name>\w+)/$', ChatConsumer),
]