from django.core.mail import send_mail

send_mail(
    'Subject here',
    'Message here',
    'from@admin.com',
    ['to@customer.com'],
    fail_silently=False,
)
