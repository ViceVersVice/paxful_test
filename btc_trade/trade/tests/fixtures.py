import pytest

from trade.models import Trade


@pytest.fixture
def trade_factory(user_profile_factory, crypto_currency_rate_factory):
    def _create(**kwargs):
        buyer = kwargs.pop('buyer', None) or user_profile_factory()
        crypto_currency = kwargs.pop('crypto_currency', None) or crypto_currency_rate_factory()
        return Trade.objects.create(buyer=buyer, crypto_currency=crypto_currency, **kwargs)

    return _create


