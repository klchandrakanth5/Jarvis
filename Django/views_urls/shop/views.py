from django.http import HttpResponse
def Home(request):
    return HttpResponse("<h1> This is Home page </h1>")
def Catagory(request):
    return HttpResponse(("[Gucies , Chips , Snaks]"))

