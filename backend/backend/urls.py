from django.contrib import admin
from django.urls import path, include
from bakery import views
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'bills', views.BakeryView, 'bill')



urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
 
]
