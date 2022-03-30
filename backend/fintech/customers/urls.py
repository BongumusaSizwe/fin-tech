from django.conf.urls import url
from customers import views


urlpatterns = [ 
    url(r'^api/customers$', views.customer_list),
    url(r'^api/clientregister$', views.client_register),
    url(r'^api/customers/(?P<pk>[0-9]+)$', views.customer_detail),
    url(r'^api/customers/onboard$', views.customers_list)
]

# from django.urls import path
# urlpatterns = [
#     path('', views.customer_list, name='customers'),
#     path('initialize/', views.client_register, name='create'),
#     path('finalize/<str:pk>/', views.register_finalize, name='finalize'),
# ]

