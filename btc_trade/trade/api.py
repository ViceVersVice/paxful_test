from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from accounts.models import UserProfile
from payments.models import CryptoCurrencyRate
from trade.models import Trade
from trade.serializers import TradeSerializer, TradeListSerializer


class TradeViewSet(ModelViewSet):
    serializer_class = TradeSerializer

    def get_queryset(self):
        return Trade.objects.all()

    def get_serializer_class(self):
        action_serializer_mapping = {
            'create': TradeSerializer,
            'list': TradeListSerializer
        }

        return action_serializer_mapping.get(self.action)

    def create(self, request, *args, **kwargs):
        print('HERE!!!')
        default_crypto_currency = CryptoCurrencyRate.objects.first()
        defaut_buyer = UserProfile.objects.first()
        data = {
            'amount': request.data.get('amount'),
            'buyer': defaut_buyer.pk,
            'payment_method': Trade.USD,
            'crypto_currency': default_crypto_currency.pk
        }

        serializer = self.get_serializer_class()(data=data)
        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data)
