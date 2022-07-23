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
