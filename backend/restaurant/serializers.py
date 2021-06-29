from rest_framework import serializers
from restaurant.models import Restaurant, Category


class RestaurantsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['owner']


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
