import ssl
from geopy.geocoders import Nominatim
from django.db import models


class Tree(models.Model):
    class Status:
        awful = 'awful'
        bad = 'bad'
        care_required = 'care_required'
        good = 'good'
        perfect = 'perfect'

    STATUS_CHOICES = (
        (Status.awful, 'Awful'),
        (Status.bad, 'Bad'),
        (Status.care_required, 'Care Required'),
        (Status.good, 'Good'),
        (Status.perfect, 'Perfect'),
    )

    radius = models.FloatField(
        verbose_name='radius'
    )

    image = models.ImageField(
        verbose_name='image',
        upload_to="covers/",
        blank=True,
        null=True
    )

    age = models.PositiveSmallIntegerField(
        verbose_name='age'
    )

    family = models.CharField(
        verbose_name='family',
        max_length=128
    )

    condition = models.CharField(
        verbose_name='condition',
        max_length=64,
        choices=STATUS_CHOICES,
        default=Status.good
    )

    latitude = models.FloatField(
        verbose_name='latitude'
    )

    longitude = models.FloatField(
        verbose_name='longitude'
    )

    location = models.CharField(
        verbose_name='location',
        max_length=1000,
        blank=True, null=True
    )

    class Meta:
        verbose_name = 'Tree'
        verbose_name_plural = 'Trees'
    
    def save(self, *args, **kwargs):
        ssl._create_default_https_context = ssl._create_unverified_context
        geolocator =  Nominatim(user_agent='trees')
        self.location = geolocator.reverse(f'{self.latitude}, {self.longitude}', language='en').address
        super().save(*args, **kwargs)


class TreeWorkPlan(models.Model):
    tree = models.ForeignKey(
        verbose_name='tree',
        to='tree.Tree',
        related_name='tree_work_plans',
        on_delete=models.CASCADE
    )

    plan = models.CharField(
        verbose_name='plan',
        max_length=1024
    )

    is_done = models.BooleanField(
        verbose_name='is done',
        default=False
    )

    class Meta:
        verbose_name = 'Tree work plan'
        verbose_name_plural = 'Tree work plans'
