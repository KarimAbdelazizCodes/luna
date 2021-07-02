from rest_framework import serializers

from comment.models import Comment
from comment.serializers.serializer import MainCommentSerializer, LatestCommentsSerializer
from restaurant.models import Restaurant
from review.models import Review
from django.contrib.auth import get_user_model

User = get_user_model()


# nested user serializer for reviews
class UserReviewSerializer(serializers.ModelSerializer):

    number_of_reviews = serializers.SerializerMethodField()

    def get_number_of_reviews(self, obj):
        return obj.reviews.count()

    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'username',
            'number_of_reviews',
            'avatar'
        ]


class NestedRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = [
            'id',
            'name',
        ]


class MainReviewSerializer(serializers.ModelSerializer):
    author = UserReviewSerializer(read_only=True)
    restaurant = NestedRestaurantSerializer(read_only=True)
    number_of_likes = serializers.SerializerMethodField()
    number_of_comments = serializers.SerializerMethodField()
    latest_comments = serializers.SerializerMethodField()
    created = serializers.DateTimeField(format="%d-%m-%Y %H:%M", read_only=True)

    def get_latest_comments(self, obj):
        comments = obj.comments.all().order_by('-created')[:2]
        return MainCommentSerializer(comments, many=True).data

    def get_number_of_likes(self, obj):
        return obj.liked_by.count()

    def get_number_of_comments(self, obj):
        return obj.comments.count()

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ['author', 'restaurant', 'liked_by']
