from numpy import source
from rest_framework import serializers

from tree.models import Tree, TreeWorkPlan


class TreeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius']


class TreeWorkPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreeWorkPlan
        fields = ['id', 'plan']

class TreeDetailSerializer(serializers.ModelSerializer):
    tree_work_plans = TreeWorkPlanSerializer(allow_null=True, required=False, many=True)
    
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius', 'age', 
                 'family', 'condition', 'image', 'tree_work_plans']
