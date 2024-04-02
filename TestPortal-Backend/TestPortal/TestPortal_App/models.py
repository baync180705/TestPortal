from django.db import models

class questionModel(models.Model):
    question=models.CharField(max_length=200)

# Create your models here.
