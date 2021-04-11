import React from 'react'
import TemporadasList from '../components/TemporadasList'
import HomeNavbar from '../components/HomeNavbar'
import { Container } from 'react-bootstrap'

const Temporadas = ({ data, nTemporadas }) => {

    return (
        <div>
            <HomeNavbar />
            <Container>
                <br />

                <TemporadasList
                    temporadas={nTemporadas}
                    episodios={data}
                />
            </Container>
        </div>
    )
}

export default Temporadas