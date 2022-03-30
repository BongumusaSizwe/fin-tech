from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import Customer



class ClientCreateCustomerForm(UserCreationForm):
    first_name = forms.CharField(max_length=256, required=True)
    
    class Meta:
        model = Customer
        fields = ('first_name', 'email')

class CustomerCompleteForm(UserChangeForm):

    class Meta:
        model = Customer
        fields = UserChangeForm.Meta.fields