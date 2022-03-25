from django.db import models

# Create your models here.
class UniqueLink(models.model):
    link = models.URLField(unique=True)
    data = models.CharField()
    