from django.db import models
from django.contrib.auth.models import User
options=[
    (1,"1"),
    (2,"2"),
    (3,"3"),
    (4,"4"),
]
class Quiz(models.Model):
    quizName=models.CharField(max_length=250)
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    time_created=models.DateTimeField(auto_now_add=True)
    time_scheduled=models.DateTimeField()
    time_ending=models.DateTimeField()

class questionModel(models.Model):
    question=models.CharField(max_length=500,default="hi")
    option1=models.CharField(max_length=250,default="hi")
    option2=models.CharField(max_length=250,default="hi")
    option3=models.CharField(max_length=250,default="hi")
    option4=models.CharField(max_length=250,default="hi")
    correctOption=models.IntegerField(choices=options,default=1)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True,blank=True)

# Create your models here.
