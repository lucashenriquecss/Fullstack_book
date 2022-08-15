from turtle import title
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField(blank=True)

    #definir hora atual
    created = models.DateTimeField(auto_now_add=True)#Adiciona hora atual
    completed = models.BooleanField(default=False)

    #nome do usuario que postou
    user =models.ForeignKey(User,on_delete=models.CASCADE)


    def __str__(self):
        return self.title