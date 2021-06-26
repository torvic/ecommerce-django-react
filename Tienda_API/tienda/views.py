from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from tienda.models import Product, OrderItem, Order
from tienda.serializers import ProductSerializer, OrderItemSerializer, OrderItemCartSerializer

class ProductViewSet(viewsets.ViewSet):
	def list(self, request):
		product_queryset = Product.objects.all()
		product_serializer = ProductSerializer(product_queryset, many=True)

		return Response(product_serializer.data, status = status.HTTP_200_OK)

class OrderItemSummaryViewSet(viewsets.ViewSet):
	def list(self, request):
		#customer = request.user.customer
		#order, created = Order.objects.get_or_create(customer=customer, complete=False)
		items = OrderItem.objects.all()
		cart_total = round(sum([item.get_total() for item in items]),2)
		cart_items = sum([item.quantity for item in items])

		items_serializer = OrderItemSerializer(items, many=True)
		return Response({'summary': items_serializer.data, "cart_total": cart_total, "cart_items": cart_items}, status = status.HTTP_200_OK)


class OrderItemViewSet(viewsets.ViewSet):

	def list(self, request):
		items = OrderItem.objects.all()
		serializer_items = OrderItemCartSerializer(items, many=True)
		return Response(serializer_items.data, status = status.HTTP_200_OK)

	def create(self, request, *args, **kwargs):
		# Order segun al cliente (customer)
		order = Order.objects.get(customer=1)
		item_serializer = OrderItemCartSerializer(data=request.data)
		if item_serializer.is_valid():
			item_serializer.save()
			return Response(item_serializer.data, status=status.HTTP_201_CREATED)
		return Response({"message":"Datos incorrectos!!!"}, status=status.HTTP_400_BAD_REQUEST)
	
	def update(self, request, pk=None):
		instance = get_object_or_404(OrderItem, pk=pk)
		serializer = OrderItemCartSerializer(instance, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
	
	def destroy(self, request, pk=None):
		instance = get_object_or_404(OrderItem, pk=pk)
		instance.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)