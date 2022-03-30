from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from customers import views
from django.conf import settings 
from django.conf.urls.static import static

# from django.conf.urls import url
import django.conf.urls as curls

router = routers.DefaultRouter()
router.register(r'customers', views.ClientView, 'customer')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)