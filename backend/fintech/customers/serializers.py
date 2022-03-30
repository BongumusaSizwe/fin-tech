from rest_framework import serializers
from customers.models import Customer, User


# client side, initialize customer registration
class CustomerInitRegSerializer(serializers.ModelSerializer):
    
    user = serializers.ReadOnlyField(source='user.id')
    class Meta:
        model = Customer
        fields = ['user', 'email', 'first_name']
        

# customer side: complete registration initialized by the customer
class CustomerSerializer(serializers.ModelSerializer):
    client = serializers.ReadOnlyField(source='client.email')
    class Meta:
        model = Customer
        fields = (
            'client',
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
            'customer_photo',
            'customer_video'
        )

# class UserSerializer(serializers.ModelSerializer):
#     customers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
#     class Meta:
#         model = User
#         fields = ['id', 'email', 'customers']