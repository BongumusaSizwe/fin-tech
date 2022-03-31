from rest_framework import serializers
from customers.models import Customer, User
from django_countries.serializers import CountryFieldMixin


# client side, initialize customer registration
class CustomerInitRegSerializer(serializers.ModelSerializer):
    
    user = serializers.ReadOnlyField(source='user.id')
    class Meta:
        model = Customer
        fields = ['user', 'email', 'first_name']
        

# customer side: complete registration initialized by the customer
class CustomerSerializer(CountryFieldMixin, serializers.ModelSerializer):
    email = serializers.ReadOnlyField()
    first_name = serializers.ReadOnlyField()
    status = serializers.ReadOnlyField()
    is_active = serializers.ReadOnlyField()

    class Meta:
        model = Customer
        fields = (
            'email',
            'first_name',
            'status',
            'dob',
            'country',
            'passport',
            'nationality',
            'phone_number',
            'address',
            'occupation',
            'passport_photo',
            'customer_video',
            'is_active',
        )

class SetCustomerStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = (
            'status',
        )