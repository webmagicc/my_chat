from django.contrib import admin

from .models import Online, GroupParticipant, ChatMessage, ChatSession, ChatGroup


@admin.register(Online)
class OnlineAdmin(admin.ModelAdmin):
    pass


@admin.register(GroupParticipant)
class GroupParticipantAdmin(admin.ModelAdmin):
    pass


@admin.register(ChatSession)
class ChatSessionAdmin(admin.ModelAdmin):
    pass


@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    pass


@admin.register(ChatGroup)
class ChatGroupAdmin(admin.ModelAdmin):
    pass




