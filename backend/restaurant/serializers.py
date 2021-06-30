from rest_framework import serializers
from restaurant.models import Restaurant, Category


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class RestaurantsSerializer(serializers.ModelSerializer):
    number_of_reviews = serializers.SerializerMethodField(read_only=True)
    average_rating = serializers.SerializerMethodField(read_only=True)
    category = CategoriesSerializer(read_only=True)

    def get_number_of_reviews(self, obj):
        return obj.reviews.count()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'street', 'city', 'zip', 'website', 'phone_number',
                  'email', 'hours', 'price_level', 'avatar', 'number_of_reviews', 'average_rating']
        read_only_fields = ['owner']


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


# TODO: list of 4 best rated restaurants /api/home/





