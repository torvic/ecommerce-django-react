from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from tienda.models import Product
from tienda.serializers import ProductSerializer

class ProductViewSet(viewsets.ViewSet):
	def list(self, request):
		product_queryset = Product.objects.all()
		product_serializer = ProductSerializer(product_queryset, many=True)

		return Response(product_serializer.data, status = status.HTTP_200_OK)
		
