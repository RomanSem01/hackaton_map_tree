from django.urls import path
from backend.map_trees.tree.models import TreeWorkPlan

from tree.views import TreeListCreateView, TreeDetailView, PlanDetailView


urlpatterns = [
    path('', TreeListCreateView.as_view(), name='tree_list_create_view'),
    path('<int:tree_id>/', TreeDetailView.as_view(), name='tree_detail_view'),
    path('<int:tree_id>/plan/', TreeWorkPlan.as_view(), name='tree_work_plan_create'),
    path('<int:tree_id>/plan/<int:plan_id>/', PlanDetailView.as_view(), name='tree_detail_view'),
]
