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
        default="default.png",
        upload_to="covers/"
    )
    age = models.PositiveSmallIntegerField(
        verbose_name='age'
    )
    species = models.CharField(
        verbose_name='species',
        max_length=128
    )
    condition = models.CharFieldField(
        verbose_name='condition',
        choices=STATUS_CHOICES,
        default=Status.good
    )
