from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from restaurant.models import Restaurant
from .models import Review
from .permissions import IsAuthorOrSuperuserOrReadOnly
from .serializers.mainserializer import MainReviewSerializer


class CreateReview(CreateAPIView):
    """
    post:
    Create a review

    Restaurant ID must be passed in URL, and body must contain:
    - Text
    - Images
    - Rating
    """
    serializer_class = MainReviewSerializer
    pagination_class = LimitOffsetPagination

    def create(self, request, *args, **kwargs):
        author = self.request.user
        restaurant = self.kwargs['pk']

        # A check to ensure that restaurant owners can't review their own restaurants
        if author == Restaurant.objects.get(id=restaurant).owner:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = self.get_serializer(data=self.request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(author=author, restaurant_id=restaurant)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListRestaurantReviews(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = MainReviewSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        restaurant_id = self.kwargs['pk']
        return Review.objects.filter(restaurant_id=restaurant_id)


class ListUserReviews(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = MainReviewSerializer

    def get_queryset(self):
        author = self.kwargs['pk']
        return Review.objects.filter(author_id=author)


class GetUpdateDeleteReview(RetrieveUpdateDestroyAPIView):
    serializer_class = MainReviewSerializer
    queryset = Review.objects.all()
    permission_classes = [IsAuthorOrSuperuserOrReadOnly]


class TriggerReviewLike(UpdateAPIView):
    queryset = Review.objects.all()
    serializer_class = MainReviewSerializer

    def patch(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user

        if user == review.author:
            return Response({'error': 'cannot like own review'},
                            status=status.HTTP_400_BAD_REQUEST)

        if user in review.liked_by.all():
            review.liked_by.remove(user)
            return Response({'success': f'unliked review {review.id}'}, status=status.HTTP_200_OK)
        else:
            review.liked_by.add(user)
            return Response({'success': f'liked review {review.id}'}, status=status.HTTP_200_OK)


class ListLikedReviews(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = MainReviewSerializer

    def get_queryset(self):
        liked = self.request.user.liked_reviews.all()
        return Review.objects.filter(id__in=liked)


class ListCommentedReviews(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = MainReviewSerializer

    def get_queryset(self):
        author = self.request.user
        return Review.objects.filter(comments__author=author)
