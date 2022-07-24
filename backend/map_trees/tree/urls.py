from django.urls import path

from tree.views import TreeListCreateView, TreeDetailView, TreeWorkPlanDetailView, TreeWorkPlanCreateView


urlpatterns = [
    path('', TreeListCreateView.as_view(), name='tree_list_create_view'),
    path('<int:tree_id>/', TreeDetailView.as_view(), name='tree_detail_view'),
    path('<int:tree_id>/plan/', TreeWorkPlanCreateView.as_view(), name='tree_work_plan_create'),
    path('<int:tree_id>/plan/<int:plan_id>/', TreeWorkPlanDetailView.as_view(), name='tree_detail_view'),
]
