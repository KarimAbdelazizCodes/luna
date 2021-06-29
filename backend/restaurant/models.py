from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Category(models.Model):
    category = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.category}'


class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE,
                                 related_name='restaurants', blank=True, null=True)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip = models.CharField(max_length=50)
    website = models.CharField(max_length=250)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. "
                                         "From 9 up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    email = models.CharField(max_length=100)
    hours = models.CharField(max_length=100)
    price_level = models.CharField(max_length=10, choices=[('1', '$'), ('2', '$$'), ('3', '$$$')],
                                   default='1')
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    owner = models.ForeignKey(to=User, blank=False, null=False, on_delete=models.CASCADE,
                              related_name='owner')
    created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return f'{self.name} by {self.owner}'
