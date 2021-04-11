import React, { useEffect, useState } from 'react'
import ListaEpisodios from './ListaEpisodios'
import SelectTemporada from './SelectTemporada'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Col, Row } from 'react-bootstrap';

const TemporadasList = ({ temporadas, episodios }) => {

    const [episodiosTodos, setEpisodiosTodos] = useState(episodios)
    const [episodiosTemporada, setEpisodiosTemporada] = useState([])
    const [temporadaSeleccionada, setTemporadaSeleccionada] = useState(1)

    useEffect(() => {
        filtrarEpisodios(temporadaSeleccionada)
    }, [])

    const filtrarEpisodios = (T) => {
        let episodiosTemporada = []
        episodiosTodos.map((episodio) => {
            let tInt = parseInt(episodio.season, 10)
            if (tInt == T) {
                episodiosTemporada.push(episodio)
            }
        })
        setEpisodiosTemporada(episodiosTemporada)
    }


    const handleTempodadasChange = e => {
        const temporadaSeleccionada = e.target.dataset.temporada
        setTemporadaSeleccionada(temporadaSeleccionada)
        filtrarEpisodios(temporadaSeleccionada)
    }

    return (
        <div>
            <Row>
                <Col md={3}>
                    {temporadas.map((temporada) => (
                        <SelectTemporada
                            key={temporada}
                            temporada={temporada}
                            onClick={handleTempodadasChange}
                        />
                    ))}
                </Col>
                <Col>
                    <ListaEpisodios
                        episodios={episodiosTemporada}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default TemporadasList