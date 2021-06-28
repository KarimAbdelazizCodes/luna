from django.urls import path
from django.views import View
from .views import RegisterNewUser, PasswordReset, Validation

urlpatterns = [
    path('registration/', RegisterNewUser.as_view()),
    path('auth/password-reset/', PasswordReset.as_view()),
    path('registration/validate/', Validation.as_view()),
    path('auth/password-reset/validate/', Validation.as_view())
]
