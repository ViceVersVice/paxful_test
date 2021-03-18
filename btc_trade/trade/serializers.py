from rest_framework import serializers

from trade.models import Trade


class BaseTradeDetailsSerializer(serializers.ModelSerializer):
    payment_method = serializers.SerializerMethodField()
    cryptocurrency = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    buyer = serializers.SerializerMethodField()
    buyer_reputation = serializers.SerializerMethodField()

    class Meta:
        model = Trade
        fields = ('id', 'amount', 'payment_method', 'cryptocurrency', 'status', 'buyer', 'buyer_reputation',)

    def get_payment_method(self, obj):
        return obj.get_payment_method_display()

    def get_status(self, obj):
        return obj.get_status_display()

    def get_buyer(self, obj):
        return str(obj.buyer)

    def get_buyer_reputation(self, obj):
        return obj.buyer.reputation

    def get_cryptocurrency(self, obj):
        return obj.cryptocurrency.get_type_display()


class TradeListSerializer(BaseTradeDetailsSerializer):
    pass


class TradeDetailsSerializer(BaseTradeDetailsSerializer):
    cryptocurrency_amount = serializers.SerializerMethodField()

    class Meta(BaseTradeDetailsSerializer.Meta):
        model = Trade
        fields = BaseTradeDetailsSerializer.Meta.fields + ('cryptocurrency_amount', )

    def get_cryptocurrency_amount(self, obj):
        return round(obj.amount / obj.cryptocurrency.usd, 8)


class TradeCreateUpdateSerializer(serializers.ModelSerializer):
    status = serializers.ChoiceField(choices=Trade.STATUS_CHOICES, required=False)

    class Meta:
        model = Trade
        fields = ('amount', 'payment_method', 'cryptocurrency', 'buyer', 'status')

