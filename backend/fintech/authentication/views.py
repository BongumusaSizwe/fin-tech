# from lists import serializers
from .serializers import AuthTokenObtainPairSerializer, RegisterSerializer
from rest_framework.permissions import AllowAny
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User

class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny, )
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class AuthObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = AuthTokenObtainPairSerializer
