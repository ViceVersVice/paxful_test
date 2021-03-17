import uuid

import pytest

from payments.models import CryptoCurrencyRate


@pytest.fixture
def crypto_currency_rate_factory():
    def _create(**kwargs) -> CryptoCurrencyRate:
        crypto_rate, created = CryptoCurrencyRate.objects.get_or_create(type=CryptoCurrencyRate.BTC, usd=100, eur=200)
        return crypto_rate

    return _create


