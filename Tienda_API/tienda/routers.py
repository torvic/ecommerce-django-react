from django.db import router
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter

from tienda.views import ProductViewSet, OrderItemViewSet

router = DefaultRouter()

router.register(r'products', ProductViewSet, basename="products")
router.register(r'order_items', OrderItemViewSet, basename="order_items")

urlpatterns = router.urls