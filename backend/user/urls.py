from django.urls import path
from user.views import ListUserView, UpdateLoggedInUserProfile, UserSpecificProfile


urlpatterns = [
    path('users/', ListUserView.as_view()),
    path('me/', UpdateLoggedInUserProfile.as_view()),
    path('users/<int:pk>/', UserSpecificProfile.as_view()),
]
