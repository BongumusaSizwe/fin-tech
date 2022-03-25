from rest_framework import serializers
from customers.models import Customer

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = (
            'email',
            'first_name',
            'dob',
            'country',
            'customer_photo',
            'status'
        )



