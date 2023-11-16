from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Finch(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    age = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class Toy(models.Model):
    name = models.CharField(max_length=100)
    finch = models.ForeignKey(Finch, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name
    

class Photo(models.Model):
    url = models.CharField(max_length=200)
    finch = models.ForeignKey(Finch, on_delete=models.CASCADE)

    def __str__(self):
        return f"Photo for finch_id: {self.finch_id} @ {self.url}"

class Feeding(models.Model):
    date = models.DateTimeField('Feeding time', default=timezone.now)
    food = models.CharField(max_length=100, blank=True)
    finch = models.ForeignKey('Finch', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.date.strftime('%Y-%m-%d %H:%M')} - {self.food or 'No details'}"