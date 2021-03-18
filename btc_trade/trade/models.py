from django.db import models

# Create your models here
from accounts.models import UserProfile
from payments.models import CryptoCurrency


class Trade(models.Model):
    STATUS_PAID = 1
    STATUS_NOT_PAID = 2

    STATUS_CHOICES = (
        (STATUS_PAID, 'Paid'),
        (STATUS_NOT_PAID, 'Not paid'),
    )

    USD = 1
    PAYMENT_METHOD_TYPE_CHOICES = (
        (USD, 'USD'),
    )

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.PositiveSmallIntegerField(choices=PAYMENT_METHOD_TYPE_CHOICES)
    cryptocurrency = models.ForeignKey(CryptoCurrency, related_name='trades', on_delete=models.CASCADE)
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=STATUS_NOT_PAID)
    buyer = models.ForeignKey(UserProfile, related_name='trades', on_delete=models.CASCADE)
