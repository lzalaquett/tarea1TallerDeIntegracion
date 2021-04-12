import React from 'react'
import SerieCard from '../components/SerieCard'
import { Row, Col, Container, CardGroup, CardDeck } from 'react-bootstrap'
import HomeNavbar from '../components/HomeNavbar'
import '../components/styles/componentes.css'

const Series = ({ series }) => (
    <div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        </style>
        <HomeNavbar />
        <Container>
            <br />
            <br />
            <h1 style={{ fontFamily: 'Bangers' }}>¿Listo para para la acción y la intriga?</h1>
            <h4>Selecciona tu serie favorita</h4>
            <CardDeck>
                {series.map((serie, index) => (
                    <SerieCard
                        key={index}
                        nombre={serie}
                    />
                ))}
            </CardDeck>
        </Container>
    </div>
)


export default Series