from django.db import models

# Create your models here.


class Employee(models.Model):
    firstname = models.CharField()
    lastname = models.CharField()
    ntid = models.CharField()
    email = models.CharField()
    created_date = models.DateTimeField()
    updated_date = models.DateTimeField()