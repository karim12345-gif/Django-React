from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BakerySerializers
from .models import Bakery
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

class BakeryView(viewsets.ModelViewSet):
     serializer_class = BakerySerializers
     queryset = Bakery.objects.all()




