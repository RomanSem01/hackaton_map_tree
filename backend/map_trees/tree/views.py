from rest_framework import generics
from rest_framework.permissions import AllowAny
from django_filters import rest_framework as filters
from django.shortcuts import get_object_or_404

from tree.models import Tree, TreeWorkPlan
from tree.serializers import TreeListSerializer, TreeDetailSerializer, TreeWorkPlanSerializer


class TreeListCreateView(generics.ListCreateAPIView):
    permission_classes = (
        AllowAny,
    )

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('condition',)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TreeDetailSerializer
        return TreeListSerializer
    
    def get_queryset(self):
        return Tree.objects.all()


class TreeDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = TreeDetailSerializer

    def get_object(self):
        return get_object_or_404(Tree, pk=self.kwargs.get('tree_id'))


class PlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = TreeWorkPlanSerializer

    def get_object(self):
        return get_object_or_404(TreeWorkPlan, pk=self.kwargs.get('plan_id'))
