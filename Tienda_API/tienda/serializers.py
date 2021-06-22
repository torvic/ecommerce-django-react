from rest_framework import serializers
from tienda.models import Product, OrderItem

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
	#product = ProductSerializer()

	class Meta:
		model = OrderItem
		exclude= ['order', 'date_added']

	def to_representation(self, instance):
		return {
			"id": instance.id,
			"product": {
				"name":instance.product.name,
				"price": instance.product.price,
				"image": instance.product.imageURL
			},
			"quantity": instance.quantity,
			"total_price": instance.get_total(),
		} 