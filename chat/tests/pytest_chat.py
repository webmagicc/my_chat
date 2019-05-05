import pytest
from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model
from django.test import Client
from channels.testing.websocket import WebsocketCommunicator

from my_chat.routing import application


@database_sync_to_async
def create_user(username, email, password):
    user = get_user_model().objects.create_user(
        username=username,
        email=email,
        password=password
    )
    return user


@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def pytest_chat():
    client1 = Client()
    client2 = Client()
    user1 = await create_user('test1', 'test1@gmail.com', '123qweasd')
    user2 = await create_user('test2', 'test2@gmail.com', '123qweasd')
    client1.force_login(user=user1)
    client2.force_login(user=user2)
    communicator1 = WebsocketCommunicator(
        application=application,
        path='/ws/groups/',
        headers=[(
            b'cookie',
            f'sessionid={client1.cookies["sessionid"].value}'.encode('ascii')
        )]
    )
    connected, _ = await communicator1.connect()
    assert connected

    await communicator1.send_json_to({"event": "group.create", "data": {"name": "Group 1"}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'group.create'
    assert message['data']['name'] == 'Group 1'
    group_url = message['data']['link']

    await communicator1.send_json_to({"event": "group.list", "data": {}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'group.list'
    assert len(message['data']) == 1

    await communicator1.send_json_to({"event": "user.list", "data": {}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'user.list'
    assert len(message['data']) == 1

    await communicator1.disconnect()

    communicator1 = WebsocketCommunicator(
        application=application,
        path=group_url,
        headers=[(
            b'cookie',
            f'sessionid={client1.cookies["sessionid"].value}'.encode('ascii')
        )]
    )
    connected1, _ = await communicator1.connect()
    assert connected1

    communicator2 = WebsocketCommunicator(
        application=application,
        path='/ws/groups/',
        headers=[(
            b'cookie',
            f'sessionid={client2.cookies["sessionid"].value}'.encode('ascii')
        )]
    )
    connected2, _ = await communicator2.connect()
    assert connected2

    await communicator1.send_json_to({"event": "add.participant", "data": {"user_id": user2.id}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'add.participant'
    assert len(message['data']) == 2

    message = await communicator2.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'new.group'

    await communicator1.send_json_to({"event": "send.message", "data": {"message": "Hello"}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'send.message'
    assert message['data']['message'] == 'Hello'

    message = await communicator2.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'new.message'

    await communicator2.disconnect()

    communicator2 = WebsocketCommunicator(
        application=application,
        path=group_url,
        headers=[(
            b'cookie',
            f'sessionid={client2.cookies["sessionid"].value}'.encode('ascii')
        )]
    )

    connected2, _ = await communicator2.connect()
    assert connected2

    await communicator1.send_json_to({"event": "send.message", "data": {"message": "Hello 2"}})
    message = await communicator1.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'send.message'
    assert message['data']['message'] == 'Hello 2'

    message = await communicator2.receive_json_from()
    assert message['status'] == 'ok'
    assert message['event'] == 'send.message'
    assert message['data']['message'] == 'Hello 2'

    await communicator1.disconnect()
    await communicator2.disconnect()
