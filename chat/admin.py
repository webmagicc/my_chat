from django.contrib import admin

from .models import Online


@admin.register(Online)
class OnlineAdmin(admin.ModelAdmin):
    pass
