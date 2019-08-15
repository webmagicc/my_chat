from django.db import models
from django.contrib.auth import get_user_model


class ChatGroup(models.Model):
    name = models.CharField(max_length=255, default='')

    @property
    def link(self):
        channel_name = self.channel_name(self.id)
        return f'/ws/chat/{self.id}/'

    def __str__(self):
        return self.name

    @classmethod
    def channel_name(cls, group_id):
        return f'group_{group_id}'

    @classmethod
    def user_channel_name(cls, user_id):
        return f'user_{user_id}'


class GroupParticipant(models.Model):
    user = models.ForeignKey(get_user_model(), related_name='group_user',
                             on_delete=models.CASCADE, null=True)
    group = models.ForeignKey(ChatGroup, related_name='group_participant',
                              on_delete=models.CASCADE, null=True)
    channel_name = models.CharField(max_length=100, db_index=True, default='', blank=True)

    def __str__(self):
        return self.user.username


class ChatMessage(models.Model):
    user = models.ForeignKey(get_user_model(), related_name='user_message',
                             on_delete=models.CASCADE, null=True)
    group = models.ForeignKey(ChatGroup, related_name='group_message',
                              on_delete=models.CASCADE, null=True)
    message = models.TextField(default='')

    def __str__(self):
        return self.message


