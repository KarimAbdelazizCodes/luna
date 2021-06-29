from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination
from django.core.mail import EmailMultiAlternatives
from project_settings.settings import DEFAULT_FROM_EMAIL
from user.serializers.mainserializer import MainUserSerializer

User = get_user_model()


class ListUserView(ListAPIView):
    """
        get:
        Get user data

        - Base URL: Returns list of all users
            - Pagination: add limit and offset parameters to request to enable response pagination

        - Search: Searches for instance of user by username, first and last name, job or email
            - Add search parameter for appropriate response
            - ex: https://krab-motion.propulsion-learn.ch/backend/api/users/?search=waltersobchak@aol.com

        - Combination: Searches for instance of user by search params, with pagination included
            - Add search , offset and limit parameters to enable pagination with search
            - ex: https://krab-motion.propulsion-learn.ch/backend/api/users/?search=waltersobchak@aol.com&offset=0&limit=25
     """
    queryset = User.objects.all()
    pagination_class = LimitOffsetPagination
    serializer_class = MainUserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name', 'email']

    def get_queryset(self):
        return User.objects.exclude(id=self.request.user.id)


class UpdateLoggedInUserProfile(RetrieveUpdateAPIView):
    """
       get:
       Get profile of logged in user

       - Must be logged in to use this endpoint!

       put:
       Update Logged in user's profile (full change)

       - Put is not advised, see patch request
       - with put, must include all changeable information

       patch:
       Update Logged in user's profile (partial change)

       - Patch is preferred method for changing user info
       - add any field you wish to change in body of request
    """
    serializer_class = MainUserSerializer

    def get_object(self):
        return User.objects.get(id=self.request.user.id)


class UserSpecificProfile(RetrieveAPIView):
    """
       get:
       Get specific user profile by ID

       - must add id to end of url, with slash afterwards
    """
    queryset = User.objects.all()
    serializer_class = MainUserSerializer