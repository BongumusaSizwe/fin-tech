# Create your views here.
from django.http.response import JsonResponse
from customers.models import Customer
from customers.serializers import CustomerSerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets

# customer crud operations
class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

@api_view(['GET', 'POST', 'DELETE'])
def customer_list(request):
    if request.method == 'GET':
        customers = Customer.objects.all()

        first_name = request.GET.get('first_name', None)
        if first_name is not None:
            customers = customers.filter(title__icontains=first_name)
        
        customers_serializer = customers(many, CustomerSerializer=True)
        return JsonResponse(customers_serializer.data, safe=False)
