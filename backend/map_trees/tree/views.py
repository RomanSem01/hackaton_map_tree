from rest_framework import generics
from rest_framework.permissions import AllowAny
from django_filters import rest_framework as filters
from django.shortcuts import get_object_or_404

from tree.serializers import TreeSerializer, TreeWorkPlanSerializer
from tree.models import Tree


class TreeListCreateView(generics.ListCreateAPIView):
    permission_classes = (
        AllowAny,
    )

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('condition',)
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()


class TreeDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = TreeSerializer

    def get_object(self):
        return get_object_or_404(Tree, pk=self.kwargs.get('tree_id'))


class PlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = TreeWorkPlanSerializer

    def get_object(self):
        return get_object_or_404(TreeWorkPlan, pk=self.kwargs.get('plan_id'))
