from channels.auth import BaseMiddleware, AuthMiddlewareStack
from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model
from django.utils.functional import LazyObject


User = get_user_model()


class MyLazyObject(LazyObject):
    """
    Throw a more useful error message when scope['my_var'] is accessed before it's resolved
    """

    def _setup(self):
        raise ValueError("Accessing scope obj before it is ready.")


class MyMiddleware(BaseMiddleware):
    @database_sync_to_async
    def _get_user(self):
        return User.objects.all().first()

    def populate_scope(self, scope):
        # pass
        # scope['my_var'] = User.objects.all().first().email
        scope['my_var'] = 'Hello'
        # scope['my_var'] = None
        # scope['my_var'] = MyLazyObject()

    async def resolve_scope(self, scope):
        # pass
        # scope['my_var'] = 'Hello3'
        scope['my_var']._wrapped = await self._get_user()


class SimpleMiddleware:
    def __init__(self, inner):
        self.inner = inner

    def __call__(self, scope):
        # user = User.objects.all().first()
        return self.inner(dict(scope, my_var="hello"))


MyMiddlewareStack = lambda inner: AuthMiddlewareStack(
    MyMiddleware(inner)
)


SimpleMiddlewareStack = lambda inner: AuthMiddlewareStack(
    SimpleMiddleware(inner)
)
