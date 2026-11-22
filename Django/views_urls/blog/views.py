from django.http import HttpResponse
def Home(request):
    return HttpResponse("this is Home page")
def About(request):
    return HttpResponse("I am Black hacker")
def Salary(request):
    return HttpResponse("My salary is 4567887667")
