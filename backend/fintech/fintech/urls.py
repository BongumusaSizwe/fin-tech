from django.contrib import admin
from django.urls import path, include
from .views import index
from rest_framework import routers
from authentication.views import RegisterView

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('authentication.urls'))
]
