from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class MainUserSerializer(serializers.ModelSerializer):
    number_of_comments = serializers.SerializerMethodField()
    number_of_reviews = serializers.SerializerMethodField()

    def get_number_of_comments(self, obj):
        return obj.comments.count()

    def get_number_of_reviews(self, obj):
        return obj.reviews.count()

    class Meta:
        model = User
        fields = [
            'id',
            'avatar',
            'username',
            'first_name',
            'last_name',
            'about',
            'email',
            'phone_number',
            'hobbies',
            'number_of_comments',
            'number_of_reviews',
        ]
