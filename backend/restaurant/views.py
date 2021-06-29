from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
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


class CreateRestaurantView(CreateAPIView):
    """
       post:
       Create new restaurant
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer

    def perform_create(self, serializer):
        # make sure to handle cases where the category doesn't exist in the DB
        serializer.save(owner=self.request.user)


class ListRestaurantsByCategoryView(ListAPIView):
    """
       get:
       Get list of all restaurants of a specific category

       - must add category id to end of url, with slash afterwards
    """
    def get_queryset(self):
        return Restaurant.objects.filter(category=self.kwargs["category_id"])

    serializer_class = RestaurantsSerializer


class ListRestaurantsByOwnerView(ListAPIView):
    """
       get:
       Get list of all restaurants of a specific owner

       - must add owner id to end of url, with slash afterwards
    """
    def get_queryset(self):
        return Restaurant.objects.filter(owner=self.kwargs["owner_id"]).order_by("-created")

    serializer_class = RestaurantsSerializer


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

