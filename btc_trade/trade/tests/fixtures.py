import pytest

from trade.models import Trade


@pytest.fixture
def trade_factory(user_profile_factory, cryptocurrency_rate_factory):
    def _create(**kwargs):
        buyer = kwargs.pop('buyer', None) or user_profile_factory()
        cryptocurrency = kwargs.pop('cryptocurrency', None) or cryptocurrency_rate_factory()
        return Trade.objects.create(buyer=buyer, cryptocurrency=cryptocurrency, **kwargs)

    return _create


