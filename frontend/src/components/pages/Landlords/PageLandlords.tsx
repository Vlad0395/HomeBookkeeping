import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button,
} from 'reactstrap'
import { Landlord } from '../../../models/landlordModels'
import { useStore } from '../../../stores/store'
import { CardLandlord } from './CardLandlord'
export const PageLandlords = observer(() => {
    const { landlordStore } = useStore()
    const { _landlords, getLandlords } = landlordStore

    const history = useHistory()
    useEffect(() => {
        getLandlords()
    }, [])
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    {/* <Breadcrumbs title="Contacts" breadcrumbItem="Users List" /> */}
                    <Button outline color="primary" className="mb-2" onClick={() => history.push('/landlord/create')}>
                        Додати арендодавця
                    </Button>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <div className="table-responsive">
                                        <Table className="table-centered table-nowrap table-hover">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col" style={{ width: '70px' }}>
                                                        #
                                                    </th>
                                                    <th scope="col">ФІО</th>
                                                    <th scope="col">Кіл-ть землі / га</th>
                                                    <th scope="col">Ціна/рік</th>
                                                    <th scope="col">Контактний телефон</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {_landlords!.map((landlord: Landlord, i: number) => (
                                                    <CardLandlord key={`landlord-${landlord.id}`} landlord={landlord} />
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row>
                                        <Col lg="12">
                                            <Pagination className="pagination pagination-rounded justify-content-center mt-4">
                                                <PaginationItem disabled>
                                                    <PaginationLink previous href="#" />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">1</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="#">2</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">3</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">4</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">5</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink next href="#" />
                                                </PaginationItem>
                                            </Pagination>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
})
