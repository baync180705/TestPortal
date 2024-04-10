from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponse
from django.contrib.auth.models import User,Group
from django.contrib.auth import authenticate,login
from rest_framework.pagination import PageNumberPagination
from django.utils import timezone

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
class login(APIView):
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        asTeacher=request.data.get("asTeacher")
        user= authenticate(request,username=username,password=password)
        if (user is not None):
                if ((asTeacher=="true") and(user.groups.filter(name="TeacherGroup").exists())):
                   return Response("teacherlogin",status=status.HTTP_200_OK)
                 
                elif ((asTeacher=="false") and(user.groups.filter(name="StudentGroup").exists())):
                    return Response("studentlogin",status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class QuizPagination(PageNumberPagination):
    page_size=20
    page_query_param="page_size"
    max_page_size=100


class makeAQuiz(APIView,QuizPagination):
    def post(self,request):
        data={
            "quizName":request.data.get("quizName"),
            "author":request.data.get("author"),
            "time_scheduled":request.data.get("time_scheduled"),
            "time_ending":request.data.get("time_ending")
        }
        serializer=QuizSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status.HTTP_400_BAD_REQUEST)
    
    def get(self,request):
        queryset=Quiz.objects.filter(time_ending__gte=timezone.now(),time_scheduled__lte=timezone.now())
        result=self.paginate_queryset(queryset,request,view=self)
        serializer=QuizSerializer(result,many=True)
        return self.get_paginated_response(serializer.data)




# Create your views here.
