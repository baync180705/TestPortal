from django.urls import path,include
from .views import question,createStudent
from TestPortal_App import views
urlpatterns=[
    path("question",question.as_view()),
    path("studentSignUp",createStudent.as_view())
]