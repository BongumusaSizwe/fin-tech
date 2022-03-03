from django.contrib import admin
from django.urls import path, include
from .views import index
from rest_framework import routers
from authentication.views import RegisterView
from customers import views

router = routers.DefaultRouter()
router.register(r'customers', views.CustomerView, 'customer')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('authentication.urls')),
    path('api/', include(router.urls))
]
