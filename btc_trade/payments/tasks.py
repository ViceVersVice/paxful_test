import requests

from payments.models import CryptoCurrency


def update_currency_rate():
    """Probably should run in background as celery beat"""

    BTC_USD_API_URL = 'https://api.pro.coinbase.com/products/BTC-USD/ticker'
    btc_usd_rate = requests.get(BTC_USD_API_URL).json().get('price')

    if btc_usd_rate:
        try:
            btc = CryptoCurrency.objects.get(type=CryptoCurrency.BTC)
            btc.usd = btc_usd_rate
            btc.save()
        except CryptoCurrency.DoesNotExist:
            CryptoCurrency.objects.create(type=CryptoCurrency.BTC, usd=btc_usd_rate)
