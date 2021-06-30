from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsOwnerOrSuperuserOrReadOnly(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user == obj.owner or request.user.is_superuser
