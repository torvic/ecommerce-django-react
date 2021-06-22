from django.contrib import admin
from tienda.models import Customer, Product, Order, OrderItem, ShippingAddress 

class OrderItemAdmin(admin.ModelAdmin):
	list_display = ("product", "order", "quantity", "date_added")



admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(ShippingAddress)