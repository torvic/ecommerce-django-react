from django.db import router
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter

from tienda.views import ProductViewSet

router = DefaultRouter()

router.register(r'products', ProductViewSet, basename="products")

urlpatterns = router.urls