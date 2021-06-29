from django.urls import path
from .views import CreateReview, ListRestaurantReviews, ListUserReviews, GetUpdateDeleteReview, TriggerReviewLike, \
    ListLikedReviews, ListCommentedReviews

urlpatterns = [
    path('reviews/new/<int:pk>/', CreateReview.as_view()),
    path('reviews/restaurant/<int:pk>/', ListRestaurantReviews.as_view()),
    path('reviews/user/<int:pk>/', ListUserReviews.as_view()),
    path('reviews/<int:pk>/', GetUpdateDeleteReview.as_view()),
    path('reviews/like/<int:pk>/', TriggerReviewLike.as_view()),
    path('reviews/likes/', ListLikedReviews.as_view()),
    path('reviews/comments/', ListCommentedReviews.as_view())
]