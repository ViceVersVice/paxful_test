from rest_framework import serializers

from trade.models import Trade


class BaseTradeDetailsSerializer(serializers.ModelSerializer):
    payment_method = serializers.SerializerMethodField()
    crypto_currency = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    buyer = serializers.SerializerMethodField()
    buyer_reputation = serializers.SerializerMethodField()

    class Meta:
        model = Trade
        fields = ('id', 'amount', 'payment_method', 'crypto_currency', 'status', 'buyer', 'buyer_reputation',)

    def get_payment_method(self, obj):
        return obj.get_payment_method_display()

    def get_status(self, obj):
        return obj.get_status_display()

    def get_buyer(self, obj):
        return str(obj.buyer)

    def get_buyer_reputation(self, obj):
        return obj.buyer.reputation

    def get_crypto_currency(self, obj):
        return obj.crypto_currency.get_type_display()


class TradeListSerializer(BaseTradeDetailsSerializer):
    pass


class TradeDetailsSerializer(BaseTradeDetailsSerializer):
    crypto_currency_amount = serializers.SerializerMethodField()

    class Meta(BaseTradeDetailsSerializer.Meta):
        model = Trade
        fields = BaseTradeDetailsSerializer.Meta.fields + ('crypto_currency_amount', )

    def get_crypto_currency_amount(self, obj):
        """Returns amount in Satoshi"""
        payment_method_to_crypto = {
            Trade.USD: 'usd',
            Trade.EUR: 'eur'
        }

        exchange_rate = getattr(obj.crypto_currency, payment_method_to_crypto.get(obj.payment_method))

        return round(obj.amount / exchange_rate, 8)


class TradeCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ('amount', 'payment_method', 'crypto_currency', 'buyer')

