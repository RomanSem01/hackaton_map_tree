from rest_framework import serializers

from tree.models import Tree, TreeWorkPlan


class TreeWorkPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreeWorkPlan
        fields = ['id', 'plan', 'is_done']


class TreeSerializer(serializers.ModelSerializer):
    tree_work_plans = TreeWorkPlanSerializer(allow_null=True, required=False, many=True)
    
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius', 'age', 
                 'family', 'condition', 'image', 'location', 'tree_work_plans']
        read_only_fields = ['location', ]
