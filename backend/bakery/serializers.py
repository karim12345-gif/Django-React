from rest_framework import serializers
from .models import Bakery


class BakerySerializers(serializers.ModelSerializer):
    class Meta:
        model= Bakery
        fields=('id','title','price','billNumber','created_datetime')

