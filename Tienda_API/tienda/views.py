from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from tienda.models import Product, OrderItem, Order
from tienda.serializers import ProductSerializer, OrderItemSerializer

class ProductViewSet(viewsets.ViewSet):
	def list(self, request):
		product_queryset = Product.objects.all()
		product_serializer = ProductSerializer(product_queryset, many=True)

		return Response(product_serializer.data, status = status.HTTP_200_OK)

class OrderItemViewSet(viewsets.ViewSet):
	def list(self, request):
		#customer = request.user.customer
		#order, created = Order.objects.get_or_create(customer=customer, complete=False)
		items = OrderItem.objects.all()
		cart_total = sum([item.get_total() for item in items])
		cart_items = sum([item.quantity for item in items])

		items_serializer = OrderItemSerializer(items, many=True)
		return Response({'summary': items_serializer.data, "cart_total": cart_total, "cart_items": cart_items}, status = status.HTTP_200_OK)
		
