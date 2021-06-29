from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from restaurant.models import Restaurant, Category
from restaurant.serializers import RestaurantsSerializer, CategoriesSerializer


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
