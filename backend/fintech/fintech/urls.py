from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from customers import views
from django.conf import settings 
from django.conf.urls.static import static



router = routers.DefaultRouter()
router.register(r'customers', views.CustomerView, 'customer')

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('authentication/', include('authentication.urls')),
    path('api/', include(router.urls)),
    path('api/users/', include('users.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)