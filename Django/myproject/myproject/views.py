from django.http import HttpResponse
def Home(request):
    return HttpResponse("welcome")
def About(request):
    return HttpResponse("I am a Backend engineer")
