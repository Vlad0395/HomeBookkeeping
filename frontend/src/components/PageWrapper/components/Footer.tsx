import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={12}>{new Date().getFullYear()} © HomeBookkeeing.</Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}
