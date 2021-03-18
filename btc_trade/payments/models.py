from django.db import models

# Create your models here.


class CryptoCurrency(models.Model):
    BTC = 1
    ETH = 2
    TYPE_CHOICES = (
        (BTC, 'Bitcoin'),
        (ETH, 'Ethereum'),
    )

    type = models.PositiveSmallIntegerField(choices=TYPE_CHOICES, unique=True, db_index=True)
    usd = models.DecimalField(max_digits=20, decimal_places=2)

    def __str__(self):
        return self.get_type_display()
