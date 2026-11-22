from django.urls import path
from . import views
urlpatterns = [
    path('',views.Home),
    path('About/',views.About),
    path('Salary/',views.Salary)
    
]