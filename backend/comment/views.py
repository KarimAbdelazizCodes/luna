from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers.serializer import MainCommentSerializer
from review.permissions import IsAuthorOrSuperuserOrReadOnly


class GetCommentByUserID(ListAPIView):
    serializer_class = MainCommentSerializer

    def get_queryset(self):
        author_id = self.kwargs['pk']
        return Comment.objects.filter(author_id=author_id)


class NewComment(CreateAPIView):
    serializer_class = MainCommentSerializer

    def create(self, request, *args, **kwargs):
        author = self.request.user
        review = self.kwargs['pk']

        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=author, review_id=review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DeleteComment(DestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = [IsAuthorOrSuperuserOrReadOnly]
    serializer_class = MainCommentSerializer


class ListReviewComments(ListAPIView):
    """
    get:
    retrieve comments for a particular review

    Must pass review ID in URL
    """
    pagination_class = LimitOffsetPagination
    serializer_class = MainCommentSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        review_id = self.kwargs['pk']
        return Comment.objects.filter(review_id=review_id)
