from django.urls import include, path
from authentication.views import AuthObtainTokenPairView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', include('rest_auth.urls')),
    path('login/', AuthObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', include('rest_auth.registration.urls')),
    # path('register/', RegisterView.as_view(), name='auth_register'),
    # path('authentication/register/', include('rest_auth.registration.urls'))
]