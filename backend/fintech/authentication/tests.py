from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
# from authentication.utils import generate_token

"""
class BaseTest(TestCase):
    def setUp(self):
        self.register_url = reverse('authentication/register/')
        self.login_url = reverse('authentication/login')

        self.user = {
            'first_name': 'tester',
            'email': 'testmail@topcoder.com',
            'password': 'Test*123',
            'password2': 'Test*123',
        }

        self.user_short_password={
            'first_name': 'tester',
            'email': 'testmail@topcoder.com',
            'password': 'Test',
            'password2': 'Test',    
        }
        self.user_unmatching_password={
            'first_name': 'tester',
            'email': 'testmail@topcoder.com',
            'password': 'Tester*123',
            'password2': 'Test*321',    
        }
        self.user_invalid_email={
            'first_name': 'tester',
            'email': 'testmail.topcoder.com',
            'password': 'Tester*123',
            'password2': 'Test*321',    
        }

        return super().setup()

class RegisterTest(BaseTest):

    def test_can_register_user(self):
        response = self.client.post(self.register_url, self.user, format='text/html')
        print(response)
"""