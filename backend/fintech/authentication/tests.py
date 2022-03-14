from unittest import skip
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
# from authentication.utils import generate_token
import json

test_users = [
    {
        "first_name": 'test_user',
        "username": "test_user1@gmail.com", 
        "password": "Test123!"
    },
    {
        "first_name": 'test_user2',
        "username": "test_user2@gmail.com",
        "password": "Test123!"
    }
]

class LoginTest(TestCase):
    def setUp(self):
        for user in test_users:
            new_user = User.objects.create(username = user['username'])
            new_user.set_password(user['password'])
            new_user.save()
    
    def test_login(self):
        USER1 = test_users[0]
        res = self.client.post('/authentication/login/',
                                data=json.dumps({
                                    'username': USER1["username"],
                                    'password': USER1["password"]
                                }),
                                content_type='application/json',
                                )

        result = json.loads(res.content)
        self.assertTrue("access" in result)

    def test_invalid_login(self):
        invalid_user =  {
        "username": "test_user22@gmail.com",
        "password": "Test123!"
        }
    
        res = self.client.post('/authentication/login/',
                                data=json.dumps({
                                    'username': invalid_user["username"],
                                    'password': invalid_user["password"]
                                }),
                                content_type='application/json',
                                )

        result = json.loads(res.content)
        self.assertFalse("access" in result)


class RegisterTest(TestCase):
    def setUp(self):
        self.register_url = '/authentication/register/'

        self.user = {
            'first_name': 'tester',
            'email': 'testmail1@topcoder.com',
            'password': 'Test*123',
            'confirm_password': 'Test*123',
        }

        self.user_short_password={
            'first_name': 'tester',
            'email': 'testmail@topcoder.com',
            'password': 'Test',
            'confirm_password': 'Test',    
        }
        self.user_unmatching_password={
            'first_name': 'tester',
            'email': 'testmail@topcoder.com',
            'password': 'Tester*123',
            'confirm_password': 'Test*321',    
        }
        self.user_invalid_email={
            'first_name': 'tester',
            'email': 'testmail.topcoder.com',
            'password': 'Tester*123',
            'confirm_password': 'Test*321',    
        }

    def test_can_register_user(self):
        response = self.client.post(self.register_url,
                                data=json.dumps(self.user),
                                content_type='application/json',
                                )

        self.assertTrue(response.status_code == 201)

    def test_used_short_password(self):
        response = self.client.post(self.register_url,
                                data=json.dumps(self.user_short_password),
                                content_type='application/json',
                                )

        self.assertTrue(response.status_code == 400)
    
    def test_used_unmatching_password(self):
        response = self.client.post(self.register_url,
                                data=json.dumps(self.user_unmatching_password),
                                content_type='application/json',
                                )

        self.assertTrue(response.status_code == 400)
    
    def test_invalid_email(self):
        response = self.client.post(self.register_url,
                                data=json.dumps(self.user_invalid_email),
                                content_type='application/json',
                                )

        self.assertTrue(response.status_code == 400)
    