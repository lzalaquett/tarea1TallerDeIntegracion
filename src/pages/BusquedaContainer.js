import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Alert, CardColumns, CardDeck, CardGroup, Col, Row } from 'react-bootstrap'
import HomeNavbar from '../components/HomeNavbar'
import Loading from '../components/Loading'
import PersonajeDetalleMini from '../components/PersonajeDetalleMini'

const BusquedaContainer = () => {

    const [personajes, setPersonajes] = useState([])
    const [personajesTotal, setPersonajesTotal] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cuenta, setCuenta] = useState(10)

    useEffect(() => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
    }, [])

    const consultaAPI = (link) => {
        axios.get(link)
            .then(result => {
                setPersonajes(result.data)
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                setError(error)
            })
    }


    const handleChange = e => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=' + e.target.value)
    }
    const handleClick = e => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/characters?limit=10&offset=' + cuenta)
        setCuenta(cuenta + 10)
    }


    return (
        <div>
            <HomeNavbar />
            <br />
            <br />
            <br />
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Buscar Personajes"
                    onChange={handleChange}
                    className="mr-sm-2"
                    style={{ backgroundColor: 'darkgrey', color: 'white' }}
                />
            </Form>
            <div>{loading ? <Loading /> : <Row>
                {personajes[0] ? personajes.map((personaje, index) => (
                    <Col style={{ alignContent: 'center' }}><PersonajeDetalleMini
                        personaje={personaje} />
                    </Col>
                ))
                    : <Alert variant="danger">no hay resultados</Alert>}
            </Row>}

            </div>
        </div>
    )
}

export default BusquedaContainer