from rest_framework import generics
from rest_framework import permissions

from transactions.api.v1.serializers import TransactionSerializer, TransactionSourceSerializer
from transactions.models import Transaction, TransactionSource


class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionSourceListCreateView(generics.ListCreateAPIView):
    queryset = TransactionSource.objects.all()
    serializer_class = TransactionSourceSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionSourceRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TransactionSource.objects.all()
    serializer_class = TransactionSourceSerializer
    permission_classes = [permissions.IsAuthenticated]
