import React from 'react'
import { Container } from 'react-bootstrap'
import HomeNavbar from '../components/HomeNavbar'
import PersonajeDetalle from '../components/PersonajeDetalle'

const Personaje = ({ personaje }) => {
    return (
        <div>
            <HomeNavbar />
            <Container>
                <PersonajeDetalle
                    personaje={personaje}
                />
            </Container>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Personaje