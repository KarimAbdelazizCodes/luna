from rest_framework import serializers
from review.models import Review


class MainReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ['author', 'restaurant', 'liked_by']
