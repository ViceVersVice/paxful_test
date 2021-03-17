from rest_framework import serializers

from trade.models import Trade


class TradeListSerializer(serializers.ModelSerializer):
    payment_method = serializers.SerializerMethodField()
    crypto_currency = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    buyer = serializers.SerializerMethodField()
    buyer_reputation = serializers.SerializerMethodField()

    class Meta:
        model = Trade
        fields = ('amount', 'payment_method', 'crypto_currency', 'status', 'buyer', 'buyer_reputation',)

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


class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ('amount', 'payment_method', 'crypto_currency', 'buyer')

