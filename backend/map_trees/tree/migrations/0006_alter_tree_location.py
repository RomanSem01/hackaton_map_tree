# Generated by Django 3.2.14 on 2022-07-23 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0005_tree_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tree',
            name='location',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='location'),
        ),
    ]
