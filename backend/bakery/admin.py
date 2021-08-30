from django.contrib import admin
from .models import Bakery

# Register your models here.

class BakeryAdmin(admin.ModelAdmin):
    list_display = ("title","price","billNumber","created_datetime")



#Register model 
admin.site.register(Bakery,BakeryAdmin)