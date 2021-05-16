import { useFormik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router'
import { Button, Col, Input, Row } from 'reactstrap'
import { CreateLandLord } from '../../../models/landlordModels'
import { useStore } from '../../../stores/store'

export const AddedEditLandlord = () => {
    const { landlordStore } = useStore()
    const { createLandLord } = landlordStore
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            amount_of_land: '',
            contact_number: '',
            note: '',
        },
        onSubmit: (values: CreateLandLord) => {
            createLandLord(values, callback)
        },
    })

    const callback = () => {
        history.goBack()
    }

    return (
        <Row>
            <Col xs={12} sm={12} md={8} lg={6}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="first_name">Ім'я</label>
                    <Input
                        id="first_name"
                        name="first_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                    />

                    <label htmlFor="last_name">Фамілія</label>
                    <Input
                        id="last_name"
                        name="last_name"
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                    />
                    <label htmlFor="middle_name">По-батькові</label>
                    <Input
                        id="middle_name"
                        name="middle_name"
                        onChange={formik.handleChange}
                        value={formik.values.middle_name}
                    />
                    <label htmlFor="amount_of_land">Кількість землі / га</label>
                    <Input
                        id="amount_of_land"
                        name="amount_of_land"
                        onChange={formik.handleChange}
                        value={formik.values.amount_of_land}
                    />
                    <label htmlFor="contact_number">Номер телефону</label>
                    <Input
                        id="contact_number"
                        maxLength={10}
                        name="contact_number"
                        onChange={formik.handleChange}
                        value={formik.values.contact_number}
                    />
                    <label htmlFor="note">Нотатки</label>
                    <textarea
                        id="note"
                        onChange={formik.handleChange}
                        value={formik.values.note}
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
