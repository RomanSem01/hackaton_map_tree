from rest_framework import serializers

from tree.models import Tree


class TreeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius']


class TreeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ['id', 'latitude', 'longitude', 'radius', 'age', 
                 'family', 'condition', 'image']
