import pytest

from payments.models import CryptoCurrency


@pytest.fixture
def cryptocurrency_rate_factory():
    def _create(**kwargs) -> CryptoCurrency:
        crypto_rate, created = CryptoCurrency.objects.get_or_create(type=CryptoCurrency.BTC, usd=100)
        return crypto_rate

    return _create


