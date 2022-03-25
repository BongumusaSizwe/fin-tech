from django.db import models
# from django_countries.fields import CountryField

class Customer(models.Model):
    # basic info
    first_name = models.CharField(max_length=155)
    # customer_photo = models.URLField()
    email = models.EmailField()
    customer_photo = models.FileField(upload_to='uploads/')
    status = models.BooleanField(default=False)

    dob = models.DateField()
    country = models.CharField(max_length=155)

    def _str_(self):
        return self.first_name

    def get_status(self):
        if self.status == False:
            return 'Pending'
        elif self.status == True:
            return 'Complete'
        else:
            return 'Pending'