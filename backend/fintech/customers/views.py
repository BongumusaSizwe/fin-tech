from rest_framework.response import Response
from customers.models import Customer
from customers.serializers import CustomerInitRegSerializer, CustomerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from .tokens import TokenGenerator
from django.core.mail import send_mail
from rest_framework import viewsets
import time

# TODO: Change to customerclientview, for initialing customer registration and also editing
class ClientView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerInitRegSerializer
    queryset = Customer.objects.all()

    def create(self, request):
        customer_serializer = CustomerInitRegSerializer(data = request.data)
        client = request.user
        if customer_serializer.is_valid():
            # send in email here
            mail_subject = 'Onboarding Request'
            client_name = client.first_name
            client_email = 'email@topcoder.com'
            customer_email = customer_serializer.validated_data.get('first_name')
            
            timestamp = time.time()
            token = TokenGenerator()._make_hash_value(
                customer_email,
                timestamp=timestamp
                )

            link = '127.0.0.1/3000/' + str(token) + str(client.id) + "->>" + str(customer_serializer.validated_data.get('user'))
            message = "Dear Customer, You have a new onboarding request from {0}. Please click on the {1} to start onboarding yourself".format(client_name, link)
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
        queryset = Customer.objects.all()
        serializer = CustomerSerializer(queryset, many=True)
        return Response(serializer.data)


# @csrf_exempt
class CustomerView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

    # def list(self, request):
    #     pass

    def update(self, request, pk):
        customer = self.get_object()
        serializer = CustomerSerializer(data = request.data)

        if serializer.is_valid():
            customer.save()



# @api_view(['GET', 'PUT'])
# def register_finalize(request):
#     try:
#         customer = Customer.objects.get(pk = pk)
#     except Customer.DoesNotExist:
#         return Response(status = status.HTTP_404_NOT_FOUND)    

#     if request.method == 'GET':
#         serializer = CustomerSerializer(customer)
#         return Response(serializer.data)

#     if request.method == 'PUT':
#         customer_serializer = CustomerSerializer(customer, data=request.data)
#         if customer_serializer.is_valid():
#             customer_serializer.save()
#             return Response(customer_serializer.data)
#         return Response(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)            
    

# @api_view(['GET', 'POST'])
# def client_register(request):
#     logging.debug("This part was reached")
#     print('We reached here', file=sys.stderr)
#     if request.method == 'GET':
#         customer_serializer = CustomerInitRegSerializer(data = request.data)

#         if customer_serializer.is_valid():
#             customer_serializer.save()

#             return JsonResponse(customer_serializer.data, status = status.HTTP_200_OK)

#     elif request.method == 'POST':
#         logging.debug("Reached here")
#         customer_data = JSONParser().parse(request)
#         customer_serializer = CustomerInitRegSerializer(data = customer_data)
#         if customer_serializer.is_valid():
#             # send in email here
#             customer_serializer.save()
#             customer_name = customer_serializer.get_value('first_name')
#             mail_subject = 'Onboarding Request'
#             client_name = 'temporary'
#             client_email = 'email@topcoder.com'
#             customer_email = customer_serializer.get_value('email')
#             token = ''
#             message = "Dear Customer, You have a new onboarding request from {0}. Please click on the {1} to start onboarding yourself".format(client_name, link)
#             mail_status = send_mail(
#                 mail_subject,
#                 message,
#                 client_email,
#                 [customer_email],
#                 fail_silently=False,
#             )
            
#             return JsonResponse(customer_serializer.data, status.HTTP_201_CREATED)


# @api_view(['GET', 'PUT', 'DELETE'])
# def customer_detail(request, pk):
#     try:
#         customer = Customer.objects.get(pk = pk)
#     except:
#         return JsonResponse({'message:' 'Customer does not exist'}, status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'GET':
#         customer_serializer = CustomerSerializer(customer)
#         return JsonResponse(customer_serializer.data, status=status.HTTP_200_OK)


# # list customers belonging to client
# @api_view(['GET'])
# def customers_list(request, pk):
#     customers = Customer.objects.filter(pk = pk)

#     if request.method == 'GET':
#         customer_serializer = CustomerSerializer(customers, many=True)
#         return JsonResponse(customer_serializer.data, safe=False)