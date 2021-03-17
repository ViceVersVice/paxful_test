import pytest
import pytest_django

from trade.models import Trade
from trade.serializers import TradeSerializer, TradeListSerializer


def test_trade_list_serializer(db, trade_factory):
    trade = trade_factory(amount=1000, payment_method=Trade.USD)
    print('tR', trade)
    print('tR', vars(trade))
    serialized_data = TradeListSerializer(Trade.objects.all(), many=True).data
    print(serialized_data)
    #
    # assert len(serialized_data.items()) == 2
    # assert serialized_data['name'] == skill_char.name
    # assert serialized_data['level'] == SkillCharacteristic.CONFIDENT




