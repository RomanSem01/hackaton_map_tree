# Generated by Django 3.2.14 on 2022-07-23 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0003_treeworkplan'),
    ]

    operations = [
        migrations.AddField(
            model_name='treeworkplan',
            name='is_done',
            field=models.BooleanField(default=False, verbose_name='is done'),
        ),
    ]
