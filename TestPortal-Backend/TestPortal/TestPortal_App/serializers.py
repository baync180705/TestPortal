from rest_framework import serializers
from .models import *

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model=questionModel
        fields=["question","option1","option2","option3","option4","correctOption","quiz"]

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=Quiz
        fiels=["quizName","author","time_scheduled","time_ending","time_created"]