# Generated by Django 3.1.6 on 2022-03-31 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0007_auto_20220331_0905'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='passport_photo',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]
