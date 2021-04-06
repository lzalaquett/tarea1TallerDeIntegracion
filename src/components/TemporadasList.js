import React from 'react'
import Card from './Card'
import SelectTemporada from './SelectTemporada'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Col, Container, Row } from 'react-bootstrap';

const TemporadasList = ({ temporadas, episodios }) => (
    <div>
        <Row>
            <Col md={2}>
                {temporadas.map((temporada) => (
                    <SelectTemporada
                        key={temporada}
                        temporada={temporada}
                    />
                ))}
            </Col>
            <Col>
                {episodios.map((episodio) => (
                    <Card
                        key={episodio.episode_id}
                        {...episodio}
                    />
                ))}
            </Col>
        </Row>
    </div>
)

export default TemporadasList