import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Badge, Button, Row, Col } from 'reactstrap'

export const PageAllTransactions = () => {
    const transactions = [
        {
            id: 'customCheck2',
            billingName: 'Neal Matthews',
            Date: '07 Oct, 2019',
            total: '$400',
            badgeClass: 'success',
            paymentType: 'Дохід',
            methodIcon: 'fa-cc-mastercard',
            link: '#',
        },
        {
            id: 'customCheck3',
            billingName: 'Jamal Burnett',
            Date: '07 Oct, 2019',
            total: '$380',
            badgeClass: 'danger',
            paymentType: 'Витрати',
            methodIcon: 'fa-cc-visa',
            link: '#',
        },
        {
            id: 'customCheck4',
            billingName: 'Juan Mitchell',
            Date: '06 Oct, 2019',
            total: '$384',
            badgeClass: 'success',
            paymentType: 'Дохід',
            methodIcon: 'fa-cc-paypal',
            link: '#',
        },
        {
            id: 'customCheck5',
            billingName: 'Barry Dick',
            Date: '05 Oct, 2019',
            total: '$412',
            badgeClass: 'success',
            paymentType: 'Дохід',
            methodIcon: 'fa-cc-mastercard',
            link: '#',
        },
        {
            id: 'customCheck7',
            billingName: 'Jacob Hunter',
            Date: '04 Oct, 2019',
            total: '$392',
            badgeClass: 'success',
            paymentType: 'Дохід',
            methodIcon: 'fa-cc-paypal',
            link: '#',
        },
    ]

    return (
        <>
            <Card>
                <CardBody>
                    <Row className="w-100">
                        <Col>
                            <CardTitle className="mb-4">Всі транзакції</CardTitle>
                        </Col>
                        <Col className="text-right">
                            <Link
                                to="/transaction/add-transaction"
                                className=" btn btn-outline-success waves-effect waves-light"
                            >
                                Додати транзакцію
                            </Link>
                        </Col>
                    </Row>
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th style={{ width: '20px' }}>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                &nbsp;
                                            </label>
                                        </div>
                                    </th>
                                    <th>Назва транзакції</th>
                                    <th>Дата</th>
                                    <th>Сумма</th>
                                    <th>Тип витрати</th>
                                    <th>Переглянути деталі</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, key) => (
                                    <tr key={'_tr_' + key}>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={transaction.id}
                                                />
                                                <label className="custom-control-label" htmlFor={transaction.id}>
                                                    &nbsp;
                                                </label>
                                            </div>
                                        </td>
                                        <td>{transaction.billingName}</td>
                                        <td>{transaction.Date}</td>
                                        <td>{transaction.total}</td>
                                        <td>
                                            <Badge
                                                className={'font-size-12 badge-soft-' + transaction.badgeClass}
                                                color={transaction.badgeClass}
                                                pill
                                            >
                                                {transaction.paymentType}
                                            </Badge>
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                color="primary"
                                                size="sm"
                                                outline
                                                className="btn-rounded waves-effect waves-light"
                                            >
                                                Переглянути деталі
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}
