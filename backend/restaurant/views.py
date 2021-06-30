from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import LimitOffsetPagination
from restaurant.models import Restaurant, Category
from restaurant.serializers import RestaurantsSerializer, CategoriesSerializer
from review.models import Review, User
from review.serializers.mainserializer import MainReviewSerializer
from user.serializers.mainserializer import MainUserSerializer


class ListRestaurantsView(ListAPIView):
    """
       get:
       Get list of all restaurants
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer
    pagination_class = LimitOffsetPagination


class CreateRestaurantView(CreateAPIView):
    """
       post:
       Create new restaurant
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer

    def perform_create(self, serializer):
        category_id = self.request.data['category']
        serializer.save(owner=self.request.user, category_id=category_id)


class ListRestaurantsByCategoryView(ListAPIView):
    """
       get:
       Get list of all restaurants of a specific category

       - must add category id to end of url, with slash afterwards
    """
    serializer_class = RestaurantsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return Restaurant.objects.filter(category=self.kwargs["category_id"])


class ListRestaurantsByOwnerView(ListAPIView):
    """
       get:
       Get list of all restaurants of a specific owner

       - must add owner id to end of url, with slash afterwards
    """
    pagination_class = LimitOffsetPagination
    serializer_class = RestaurantsSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(owner=self.kwargs["owner_id"]).order_by("-created")


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    """
       get:
       Get restaurant data by id
       patch:
       Update restaurant data by id (partial change)
       delete:
       Delete restaurant data by id

       - must add restaurant id to end of url, with slash afterwards
       - only superuser or restaurant owner is allowed to update/delete
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer
    lookup_field = 'id'


class ListCategoriesView(ListAPIView):
    """
       get:
       Get list of all categories
    """
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
    pagination_class = LimitOffsetPagination


class Search(ListAPIView):
    """
    get:
    Search users, reviews or restaurants

    Default search param is set to Restaurant, the frontend developer is responsible
    for changing the param to either 'users' or 'restaurants' based on the user's preference
    """
    def get_serializer_class(self):
        search_type = self.request.query_params.get('type')
        if search_type == 'restaurants':
            return RestaurantsSerializer
        elif search_type == 'users':
            return MainUserSerializer
        else:
            return MainReviewSerializer

    def get_queryset(self):
        search = self.request.query_params.get('search')
        search_type = self.request.query_params.get('type')
        if search_type == 'restaurants':
            return Restaurant.objects.filter(Q(name__icontains=search) |
                                             Q(category__category__icontains=search))
        elif search_type == 'users':
            return User.objects.filter(Q(first_name__icontains=search) |
                                       Q(last_name__icontains=search) |
                                       Q(username__icontains=search))
        else:
            return Review.objects.filter(Q(content__icontains=search) |
                                         Q(author__username__icontains=search))
