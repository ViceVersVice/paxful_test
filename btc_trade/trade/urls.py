from django.urls import path, include
from rest_framework.routers import SimpleRouter

from trade.api import TradeViewSet
from trade.views import RootView

trades_viewset_router = SimpleRouter()
trades_viewset_router.register('trades', TradeViewSet, basename='trades')

urlpatterns = [
    path('api/', include(trades_viewset_router.urls)),
    path('trades/', RootView.as_view(), name='root_view')
]


print(urlpatterns)
