from django.db import models
from django.conf import settings
# from django_countries.fields import CountryField
from django.contrib.auth import get_user_model

User = get_user_model()

class Customer(models.Model):
    # basic info
    first_name = models.CharField(max_length=155, db_index=True)
    admin_mail = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField()
    customer_photo = models.ImageField(upload_to='uploads/', blank=True, null=True)

    status = models.BooleanField(default=False)

    dob = models.DateField()
    country = models.CharField(max_length=155)

    def _str_(self):
        return self.first_name