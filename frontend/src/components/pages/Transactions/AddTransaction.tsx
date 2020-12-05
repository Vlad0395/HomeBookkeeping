import React from 'react'
import { useFormik } from 'formik'
import { Button, Col, Input, Row } from 'reactstrap'
import Select from 'react-select'

export const AddTransaction = () => {
    const formik = useFormik({
        initialValues: {
            transactionName: '',
            summ: '',
            descTransaction: '',
            typeTransaction: { value: 'comings-in', label: 'Дохід' },
        },
        onSubmit: (values) => {
            console.log('data', values)
        },
    })

    const options = [
        { value: 'comings-in', label: 'Дохід' },
        { value: 'costs', label: 'Витрати' },
    ]
    return (
        <Row>
            <Col xs={12} sm={12} md={8} lg={6}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="transactionName">Назва транзакції</label>
                    <Input
                        id="transactionName"
                        name="transactionName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.transactionName}
                    />
                    <label htmlFor="typeTransaction">Тип транзакції</label>
                    <Select
                        id="typeTransaction"
                        options={options}
                        placeholder="Оберіть тип транзакції..."
                        onChange={(option) => formik.setFieldValue('typeTransaction', option)}
                        value={formik.values.typeTransaction}
                        isClearable
                    />

                    <label htmlFor="summ">Сумма транзакції</label>
                    <Input id="summ" name="summ" onChange={formik.handleChange} value={formik.values.summ} />
                    <label htmlFor="descTransaction">Опис транзакції</label>
                    <textarea
                        id="descTransaction"
                        onChange={formik.handleChange}
                        value={formik.values.descTransaction}
                        className="input-large form-control"
                    ></textarea>
                    <Button type="submit" outline color="primary" className="mt-2">
                        Submit
                    </Button>
                </form>
            </Col>
        </Row>
    )
}
