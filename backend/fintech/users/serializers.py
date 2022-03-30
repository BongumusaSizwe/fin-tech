from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer


from .models import CustomUser


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length = 150, style={'input_type': 'text'})
    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
        }

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_login', 'is_staff')
