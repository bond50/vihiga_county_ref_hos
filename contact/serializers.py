# from rest_framework import serializers
# from rest_framework.views import APIView
# from django.core.mail import send_mail, BadHeaderError
# from vihiga.settings import EMAIL_HOST_USER
#
#
# class ContactSerializer(serializers.Serializer):
#     firstname = serializers.CharField()
#     lastname = serializers.CharField()
#     email = serializers.EmailField()
#     subject = serializers.CharField()
#     message = serializers.CharField()
#
#
# class ContactView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = ContactSerializer(request.data)
#         if serializer.is_valid():
#             data = serializer.validated_data
#             firstname = data.get("firstname")
#             lastname = data.get("lastname")
#             email = data.get("email")
#             subject = data.get("subject")
#             message = data.get("message")
#             send_mail(subject,
#                       message,
#                       'galavu10@gmail.com',
#                       ['galavu10@gmail.com'],
#                       fail_silently=False
#                       )

from rest_framework import serializers
from .models import Contact
from django.core.mail import send_mail
from vihiga.settings import EMAIL_HOST_USER
from rest_framework.response import Response


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def create(self, validate_data):
        instance = super(ContactSerializer, self).create(validate_data)
        subject = "Subject: " + instance.subject + "\t(From VCRH Website)"
        message = instance.message + "\n" + \
                  "From :\t" + instance.firstname + " " + instance.lastname + \
                  "\n" + "Email Address:\t" + instance.email

        send_mail(
            subject,
            message,
            EMAIL_HOST_USER,
            [EMAIL_HOST_USER],
            fail_silently=False,
        )

        return instance

