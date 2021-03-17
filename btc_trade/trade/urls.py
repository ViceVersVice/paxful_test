from django.urls import path, include
from rest_framework.routers import SimpleRouter

from trade.api import TradeViewSet

trades_viewset_router = SimpleRouter()
trades_viewset_router.register('trades', TradeViewSet, basename='trades')

urlpatterns = [
    path('', include(trades_viewset_router.urls))
]
print(urlpatterns)
