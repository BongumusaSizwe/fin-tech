from urllib import request
from rest_framework.response import Response
from customers.models import Customer
from customers.serializers import CustomerInitRegSerializer, CustomerSerializer, SetCustomerStatusSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework import status, generics
from django.core.mail import send_mail
from rest_framework import viewsets
import logging

class ClientView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerInitRegSerializer

    def create(self, request):
        customer_serializer = CustomerInitRegSerializer(data = request.data)
        client = request.user
        if customer_serializer.is_valid():
            mail_subject = 'Onboarding Request'
            client_name = client.first_name
            client_email = 'email@topcoder.com'
            customer_email = customer_serializer.validated_data.get('first_name')

            # generate unique link, uses the pk value as token(I know ;) )
            tmp_queryset = Customer.objects.all()
            tmp_serializer = CustomerSerializer(tmp_queryset, many=True)
            token = len(tmp_serializer.data)
            link = '127.0.0.1/3000/completeregistration/' + str(token) + '/'
            message = "Dear Customer, You have a new onboarding request from {0}. Please click on the link {1} to start onboarding yourself".format(client_name, link)
            mail_status = send_mail(
                mail_subject,
                message,
                client_email,
                [customer_email],
                fail_silently=False,
            )
            
            customer_serializer.save(user = client)
            return Response(customer_serializer.data, status.HTTP_201_CREATED)
        return Response(customer_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        user = self.request.user
        queryset = Customer.objects.filter(user = user)
        serializer = CustomerSerializer(queryset, many=True)
        return Response(serializer.data)


class ExistingCustomerView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerSerializer
    
    def get_queryset(self):
        user= self.request.user
        customers = Customer.objects.filter(user = user)
        return customers.filter(is_active = True)
        # return customers

class CustomerView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

    def partial_update(self, request, pk):
        customer = self.get_object()
        serializer = CustomerSerializer(data = request.data)
        if serializer.is_valid():
            customer.save()
            return Response(serializer.data, status= status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

class ClientStatusView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = SetCustomerStatusSerializer
    queryset = Customer.objects.all()

    def partial_update(self, request, pk = None):
        customer = self.get_object()
        serializer = CustomerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_202_ACCEPTED)
        return Response(serializer.errors)

