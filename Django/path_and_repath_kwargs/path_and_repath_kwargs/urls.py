"""
URL configuration for path_and_repath_kwargs project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from . import views
from django.urls import re_path
urlpatterns = [
    path("admin/", admin.site.urls),
    path('student/<int:id>/',views.student),
    path('student/<str:name>/',views.stu_name),
    path('student/<int:id1>/',views.stu_class),
    re_path(r'^student1/(?P<id2>\d+)/$', views.student1)
]
