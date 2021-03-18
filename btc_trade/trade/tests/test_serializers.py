import pytest
import pytest_django

from trade.models import Trade
from trade.serializers import TradeListSerializer


def test_trade_list_serializer(db, trade_factory):
    first_trade = trade_factory(amount=1000, payment_method=Trade.USD)
    second_trade = trade_factory(amount=2000, payment_method=Trade.USD)

    serialized_data = TradeListSerializer(Trade.objects.all(), many=True).data

    assert len(serialized_data) == 2
    assert serialized_data[0]['amount'] == '1000.00'
    assert serialized_data[0]['payment_method'] == first_trade.get_payment_method_display()
    assert serialized_data[0]['cryptocurrency'] == first_trade.cryptocurrency.get_type_display()
    assert serialized_data[0]['status'] == first_trade.get_status_display()





