from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from accounts.models import UserProfile
from payments.models import CryptoCurrencyRate
from trade.models import Trade
from trade.serializers import TradeCreateUpdateSerializer, TradeListSerializer, TradeDetailsSerializer


class TradeViewSet(ModelViewSet):
    def get_queryset(self):
        return Trade.objects.all()

    def get_serializer_class(self):
        if self.action in ['list']:
            return TradeListSerializer
        if self.action in ['retrieve']:
            return TradeDetailsSerializer

        return TradeCreateUpdateSerializer

    def create(self, request, *args, **kwargs):
        default_crypto_currency = CryptoCurrencyRate.objects.first()
        defaut_buyer = UserProfile.objects.first()
        data = {
            'amount': request.data.get('amount'),
            'buyer': defaut_buyer.pk,
            'payment_method': Trade.USD,
            'crypto_currency': default_crypto_currency.pk
        }

        serializer = self.get_serializer_class()(data=data)
        print(serializer)
        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data)

