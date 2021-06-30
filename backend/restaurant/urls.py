from django.urls import path
from restaurant.views import ListRestaurantsView, CreateRestaurantView, ListRestaurantsByCategoryView, \
    ListRestaurantsByOwnerView, RetrieveUpdateDestroyRestaurantView, ListCategoriesView, Search, ListBestRestaurantsView

urlpatterns = [
    path('restaurants/', ListRestaurantsView.as_view()),
    path('restaurants/new/', CreateRestaurantView.as_view()),
    path('restaurants/category/<int:category_id>/', ListRestaurantsByCategoryView.as_view()),
    path('restaurants/user/<int:owner_id>/', ListRestaurantsByOwnerView.as_view()),
    path('restaurants/<int:id>/', RetrieveUpdateDestroyRestaurantView.as_view()),
    path('category/list/', ListCategoriesView.as_view()),
    path('home/', ListBestRestaurantsView.as_view()),
    path('search/', Search.as_view()),
]
