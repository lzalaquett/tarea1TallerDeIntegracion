import React from 'react'
import { Container, Card } from 'react-bootstrap'
import HomeNavbar from '../components/HomeNavbar'
import EpisodioDetalle from '../components/EpisodioDetalle'

const Episodio = ({ episodio }) => {
    return (
        <div>
            <HomeNavbar />
            <Container>
                <EpisodioDetalle
                    episodio={episodio}
                />
            </Container>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Episodio