from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404

from tree.models import Tree
from tree.serializers import TreeListSerializer, TreeDetailSerializer


class TreeListCreateView(generics.ListCreateAPIView):
    permission_classes = (
        AllowAny,
    )

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TreeDetailSerializer
        return TreeListSerializer
    
    def get_queryset(self):
        return Tree.objects.all()


class TreeDetailView(generics.RetrieveAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = TreeDetailSerializer

    def get_object(self):
        return get_object_or_404(Tree, pk=self.kwargs.get('tree_id'))
