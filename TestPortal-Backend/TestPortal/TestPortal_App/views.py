from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponse
from django.contrib.auth.models import User,Group

class question(APIView):
    def get(self,request):
        questions=questionModel.objects.all()
        serializer=QuestionSerializer(questions,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
class createStudent(APIView):
    def post(self,request):
        user=User.objects.create_user(request.data.get("username"),request.data.get("email"),request.data.get("password"))
        StudentGroup=Group.objects.get(name="StudentGroup")
        user.groups.add(StudentGroup)
        user.save()
        return Response(status=status.HTTP_201_CREATED)



# Create your views here.
