from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model

from chat.models import ChatGroup, GroupParticipant, ChatMessage
from .base import BaseChatConsumer


class ChatConsumer(BaseChatConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.group_id = self.scope['url_route']['kwargs']['group_id']
        self.group = None
        self.participants = []
        self.channel = f'group_{self.group_id}'

    async def connect(self):
        await super().connect()
        group = await self.get_group()
        if not group:
            await self._throw_error({'detail': 'Group not found'})
            await self.close()
            return
        participants = await self.get_participants()
        if self.scope['user'].id not in participants:
            await self._throw_error({'detail': 'Access denied'})
            await self.close()
            return
        await self.channel_layer.group_add(self.channel, self.channel_name)
        await self.save_channel_name()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(self.channel, self.channel_name)
        await super().disconnect(code=code)

    async def event_add_participant(self, event):
        user_id = event['data'].get('user_id')
        if not user_id:
            return await self._throw_error({'detail': 'Missing user id'}, event=event['event'])
        await self.add_participant(user_id)
        participants = await self.get_participants()
        await self._send_message(participants, event=event['event'])

    async def event_delete_participant(self, event):
        user_id = event['data'].get('user_id')
        if not user_id:
            return await self._throw_error({'detail': 'Missing user id'}, event=event['event'])
        channel_name = await self.delete_participant(user_id)
        if channel_name:
            await self.channel_layer.group_discard(self.channel, channel_name)
        participants = await self.get_participants()
        await self._send_message(participants, event=event['event'])

    async def event_send_message(self, event):
        message = event['data'].get('message')
        if not message:
            return await self._throw_error({'detail': 'Missing message'}, event=event['event'])
        await self.save_message(message, self.scope['user'])
        data = {
            'username': self.scope['user'].username,
            'message': event['data']['message'],
        }
        return await self._group_send(data, event=event['event'])

    async def event_list_messages(self, event):
        messages = await self.get_messages()
        return await self._send_message(messages, event=event['event'])

    @database_sync_to_async
    def get_group(self):
        group = ChatGroup.objects.filter(pk=self.group_id).first()
        if group:
            self.group = group
        return group

    @database_sync_to_async
    def get_participants(self):
        participants = list(GroupParticipant.objects.filter(group=self.group).values_list('user', flat=True))
        self.participants = participants
        return participants

    @database_sync_to_async
    def add_participant(self, user_id):
        user = get_user_model().objects.filter(pk=user_id).first()
        if user:
            participant, _ = GroupParticipant.objects.get_or_create(group=self.group,
                                                                    user=user)

    @database_sync_to_async
    def save_channel_name(self):
        group_participant = GroupParticipant.objects.get_or_create(group=self.group,
                                                                   user=self.scope['user'])
        if group_participant:
            group_participant.channel_name = self.channel_name
            group_participant.save()

    @database_sync_to_async
    def delete_participant(self, user_id):
        user = get_user_model().objects.filter(pk=user_id).first()
        if user:
            group_participant = GroupParticipant.objects.filter(group=self.group, user=user).first()
            if group_participant:
                channel_name = group_participant.channel_name
                group_participant.delete()
                return channel_name

    @database_sync_to_async
    def save_message(self, message, user):
        m = ChatMessage(user=user, group=self.group, message=message)
        m.save()

    @database_sync_to_async
    def get_messages(self):
        messages = ChatMessage.objects.select_related('user').filter(group=self.group).order_by('id')
        res = []
        for message in messages:
            res.append({
                'id': message.id,
                'username': message.user.username,
                'message': message.message,
            })
        return res
