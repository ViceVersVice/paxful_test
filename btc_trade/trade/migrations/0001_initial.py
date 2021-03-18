# Generated by Django 3.1.7 on 2021-03-18 00:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('payments', '0001_initial'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('payment_method', models.PositiveSmallIntegerField(choices=[(1, 'USD')])),
                ('status', models.PositiveSmallIntegerField(choices=[(1, 'Paid'), (2, 'Not paid')], default=2)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trades', to='accounts.userprofile')),
                ('cryptocurrency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trades', to='payments.cryptocurrency')),
            ],
        ),
    ]
