# Generated by Django 3.1.6 on 2022-03-31 09:05

from django.db import migrations
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0006_auto_20220330_1408'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='country',
            field=django_countries.fields.CountryField(max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='nationality',
            field=django_countries.fields.CountryField(max_length=2, null=True),
        ),
    ]
