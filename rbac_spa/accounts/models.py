# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = None  # remove username

    email = models.EmailField(unique=True)

    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('user', 'User'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
