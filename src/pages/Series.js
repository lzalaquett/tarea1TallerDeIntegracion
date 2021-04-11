import React from 'react'
import SerieCard from '../components/SerieCard'
import { Row, Col, Container } from 'react-bootstrap'
import HomeNavbar from '../components/HomeNavbar'

const Series = ({ series }) => (
    <div>
        <HomeNavbar />
        <Container>
            <Row>
                {series.map((serie, index) => (
                    <Col key={index}>
                        <SerieCard
                            nombre={serie}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
)


export default Series