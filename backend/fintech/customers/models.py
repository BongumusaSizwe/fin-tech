from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django_countries.fields import CountryField

User = get_user_model()

class Customer(models.Model):
    first_name = models.CharField(max_length=155, db_index=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    customer_photo = models.ImageField(upload_to='uploads/', null=True, blank=True)
    customer_video = models.FileField(upload_to= 'uploads/', null=True, blank=True)    
    status = models.BooleanField(default=False, blank=True)
    dob = models.DateField(null=True, blank=True)
    country = CountryField(blank_label='(select country)', null=True)
    passport = models.CharField(max_length=15, null=True, blank=True)
    passport_photo = models.ImageField(upload_to='uploads/', null=True, blank=True)
    nationality = CountryField(blank_label='(select country)', null=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length = 200, null=True, blank=True)
    occupation = models.CharField(max_length = 155, null= True, blank=True)
    is_active = models.BooleanField(default=False, null= False)

    def _str_(self):
        return self.email