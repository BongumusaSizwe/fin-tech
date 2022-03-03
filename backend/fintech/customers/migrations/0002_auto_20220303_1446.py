# Generated by Django 3.1.6 on 2022-03-03 14:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='country',
            field=models.CharField(default=datetime.date(2022, 3, 3), max_length=155),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='dob',
            field=models.DateField(default=datetime.date(2022, 3, 3)),
            preserve_default=False,
        ),
    ]
