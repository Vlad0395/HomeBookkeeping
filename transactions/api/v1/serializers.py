from rest_framework import serializers

from transactions.models import Transaction, TransactionSource


class TransactionSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransactionSource
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    source = serializers.SerializerMethodField()

    def get_source(self, transaction):
        return transaction.source.name

    class Meta:
        model = Transaction
        fields = '__all__'
