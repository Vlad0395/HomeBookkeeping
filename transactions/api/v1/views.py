from rest_framework import generics
from rest_framework import permissions

from transactions.api.v1.serializers import TransactionSerializer, TransactionSourceSerializer, LandlordSourceSerializer
from transactions.models import Transaction, TransactionSource, LandlordSource


class TransactionListCreateView(generics.ListCreateAPIView):
    """
    GET api/v1/transactions/
    POST api/v1/transactions/
    """
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    PATCH api/v1/transactions/<pk>/
    DELETE api/v1/transactions/<pk>/
    """
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionSourceListCreateView(generics.ListCreateAPIView):
    """
    GET api/v1/transactions/source/
    POST api/v1/transactions/source/
    """
    queryset = TransactionSource.objects.all()
    serializer_class = TransactionSourceSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionSourceRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    PATCH api/v1/transactions/source/<pk>/
    DELETE api/v1/transactions/source/<pk>/
    """
    queryset = TransactionSource.objects.all()
    serializer_class = TransactionSourceSerializer
    permission_classes = [permissions.IsAuthenticated]


class LandlordSourceListCreateView(generics.ListCreateAPIView):
    """
    GET api/v1/transactions/landlords/
    POST api/v1/transactions/create_landlord/
    """
    queryset = LandlordSource.objects.all()
    serializer_class = LandlordSourceSerializer
    permission_classes = [permissions.IsAuthenticated]
