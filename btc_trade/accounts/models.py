from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    reputation = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.user.username
