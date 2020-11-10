from django.contrib import admin

from transactions.models import Transaction, TransactionSource

admin.site.register(Transaction)
admin.site.register(TransactionSource)
