from django.urls import path
from .views import GetCommentByUserID, NewComment, DeleteComment, ListReviewComments

urlpatterns = [
    path('review/comment/<int:pk>/', GetCommentByUserID.as_view()),
    path('review/comment/new/<int:pk>/', NewComment.as_view()),
    path('review/comment/delete/<int:pk>/', DeleteComment.as_view()),
    path('review/comments/<int:pk>/', ListReviewComments.as_view())
]
