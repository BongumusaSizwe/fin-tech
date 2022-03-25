from rest_framework import serializers
from .models import UniqueLink

class UniqueLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = UniqueLink
        fields = (
            'customer_name',
            'link',
            'used',
        )