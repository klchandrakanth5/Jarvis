# PATH
# path() is a function in Django used to define URL patterns and connect a URL to a specific view function.
from django.http import HttpResponse
def student(request,id):
    return HttpResponse(f"Student ID :{id}")
def stu_name(request,name):
    return HttpResponse(f"Student Name is :{name}")
def stu_class(request,id1):
    return HttpResponse("A sec")

# What is re_path() in Django?
# Simple definition
# re_path() is a Django function used to define URL patterns using regular expressions (Regex).
def student1(request, id2):
    return HttpResponse(f"Student ID: {id2}")