from rest_framework import serializers
from django.contrib.auth import get_user_model
from comment.models import Comment

User = get_user_model()


class UserCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
        ]


class MainCommentSerializer(serializers.ModelSerializer):
    author = UserCommentSerializer(read_only=True)
    created = serializers.DateTimeField(format="%d-%m-%Y %H:%M")

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['author', 'review']
