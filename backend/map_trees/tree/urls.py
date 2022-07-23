from django.urls import path

from tree.views import TreeListCreateView, TreeDetailView


urlpatterns = [
    path('', TreeListCreateView.as_view(), name='tree_list_create_view'),
    path('<int:tree_id>/', TreeDetailView.as_view(), name='tree_detail_view'),
]
