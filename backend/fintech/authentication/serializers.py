# from wsgiref import validate
# from wsgiref.validate import validator
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegisterSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(
        max_length = 50,
        style={'input_type': 'text'}
    )
    
    
    email = serializers.EmailField(
        required=True,
        validators = [UniqueValidator(queryset=User.objects.all())]
    )
    username = email

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('first_name', 'email', 'password', 'confirm_password')

        extra_kwargs = {
            'first_name': {'required': True},
        }
    
    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({'password': 'password fields did not match'})
        
        if len(attrs['first_name']) == 0:
            raise serializers.ValidationError({'first_name': 'Please enter your name'})

        return attrs

    def create(self, validate_data):
        user = User.objects.create(
            first_name = validate_data['first_name'],
            email = validate_data['email']
        )
        user.set_password(validate_data['password'])
        user.save()
        return user


class AuthTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    @classmethod
    def get_token(cls, user):
        token = super(AuthTokenObtainPairSerializer, cls).get_token(user)
        token['email'] = user.email
        return token