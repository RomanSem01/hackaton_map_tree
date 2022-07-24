from rest_framework import serializers
from django.shortcuts import get_object_or_404

from tree.models import Tree, TreeWorkPlan


class TreeWorkPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreeWorkPlan
        fields = ['id', 'plan', 'is_done']
    
    def create(self, validated_data):
        tree = get_object_or_404(Tree, pk=self.context.get('tree_id'))
        tree_plan = TreeWorkPlan.objects.create(
            tree=tree,
            plan=validated_data.get('plan')
        )
        return tree_plan


class TreeSerializer(serializers.ModelSerializer):
    tree_work_plans = TreeWorkPlanSerializer(allow_null=True, required=False, many=True)
    
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius', 'age', 'color',
                 'family', 'condition', 'image', 'location', 'tree_work_plans']
        read_only_fields = ['location', ]
