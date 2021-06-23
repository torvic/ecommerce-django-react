from django.contrib import admin
from tienda.models import Customer, Product, Order, OrderItem, ShippingAddress 

class OrderItemAdmin(admin.ModelAdmin):
	list_display = ("id", "product", "order", "quantity", "date_added")

class ProductAdmin(admin.ModelAdmin):
	list_display = ("id", "name", "price")


admin.site.register(Customer)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(ShippingAddress)