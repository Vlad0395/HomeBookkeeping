from django.urls import path

from transactions.api.v1.views import TransactionListCreateView, TransactionRetrieveUpdateDestroyView, TransactionSourceListCreateView, TransactionSourceRetrieveUpdateDestroyView


urlpatterns = [
    # link for create and display list of transactions
    path('', TransactionListCreateView.as_view()),
    # link for edit and delete transaction
    path('<int:pk>/', TransactionRetrieveUpdateDestroyView.as_view()),
    # transaction source
    path('sources/', TransactionSourceListCreateView.as_view()),
    path('sources/<int:pk>/', TransactionSourceRetrieveUpdateDestroyView.as_view()),

]
