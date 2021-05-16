from django.db import models

from transactions.choices import transaction_types


class Transaction (models.Model):
    type = models.CharField(verbose_name='Тип транзакції',
                            choices=transaction_types,
                            max_length=255)
    date_transaction = models.DateField(verbose_name='Дата транзакції')
    description = models.TextField(verbose_name='Опис транзакції')
    price = models.DecimalField(
        verbose_name='Сума транзакції', decimal_places=2, max_digits=10)
    source = models.ForeignKey('TransactionSource', on_delete=models.SET_NULL, null=True, related_name='transactions'
                               )

    def __str__(self) -> str:
        return self.type

    class Meta:
        verbose_name = 'Транзакція'
        verbose_name_plural = 'Транзакції'


class TransactionSource (models.Model):
    name = models.CharField(verbose_name='Джерело', max_length=255)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Джерело транзакції'
        verbose_name_plural = 'Джерела транзакцій'


class LandlordSource (models.Model):
    first_name = models.CharField(verbose_name='Ім\'я',
                                  max_length=255)
    last_name = models.CharField(verbose_name='Прізвище',
                                 max_length=255)
    middle_name = models.CharField(verbose_name='По-батькові',
                                   max_length=255)
    amount_of_land = models.CharField(verbose_name='Кількість землі',
                                      max_length=255)
    contact_number = models.CharField(verbose_name='Телефон',
                                      max_length=255)
    note = models.CharField(verbose_name='Нотатки',
                            max_length=255)
