from django.db import models
import string
import random
import datetime

# Create your models here.
class Bakery(models.Model):
    title = models.CharField(max_length=50)
    price = models.CharField(null=False, max_length=5)
    billNumber = models.CharField( max_length=10, unique=True)
    created_datetime = models.DateTimeField(default=datetime.datetime.now)


    def __str__(self):
        return self.title
    