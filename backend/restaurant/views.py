from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from restaurant.models import Restaurant, Category
from restaurant.permissions import IsOwnerOrSuperuserOrReadOnly
from restaurant.serializers import RestaurantsSerializer, CategoriesSerializer


class ListRestaurantsView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer


class CreateRestaurantView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListRestaurantsByCategoryView(ListAPIView):
    def get_queryset(self):
        return Restaurant.objects.filter(category=self.kwargs["category_id"])

    serializer_class = RestaurantsSerializer


class ListRestaurantsByOwnerView(ListAPIView):
    def get_queryset(self):
        return Restaurant.objects.filter(owner=self.kwargs["owner_id"]).order_by("-created")

    serializer_class = RestaurantsSerializer


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantsSerializer
    lookup_field = 'id'


class ListCategoriesView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer





