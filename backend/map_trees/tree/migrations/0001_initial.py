# Generated by Django 3.2.14 on 2022-07-23 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('radius', models.FloatField(verbose_name='radius')),
                ('image', models.ImageField(blank=True, null=True, upload_to='covers/', verbose_name='image')),
                ('age', models.PositiveSmallIntegerField(verbose_name='age')),
                ('family', models.CharField(max_length=128, verbose_name='family')),
                ('condition', models.CharField(choices=[('awful', 'Awful'), ('bad', 'Bad'), ('care_required', 'Care Required'), ('good', 'Good'), ('perfect', 'Perfect')], default='good', max_length=64, verbose_name='condition')),
                ('latitude', models.FloatField(verbose_name='latitude')),
                ('longitude', models.FloatField(verbose_name='longitude')),
            ],
        ),
    ]
