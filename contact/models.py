from django.db import models


class Contact(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=50)
    subject = models.CharField(max_length=150)
    message = models.CharField(max_length=1200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.firstname
