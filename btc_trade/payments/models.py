from django.db import models

# Create your models here.


from accounts.models import UserProfile


class CryptoCurrencyRate(models.Model):
    BTC = 1
    ETH = 2
    TYPE_CHOICES = (
        (BTC, 'Bitcoin'),
        (ETH, 'Ethereum'),
    )

    type = models.PositiveSmallIntegerField(choices=TYPE_CHOICES, unique=True, db_index=True)
    usd = models.DecimalField(max_digits=20, decimal_places=2)
    eur = models.DecimalField(max_digits=20, decimal_places=2)
