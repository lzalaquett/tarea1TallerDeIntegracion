import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, ButtonGroup, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonajeDetalle = ({ personaje }) => {

    const [citas, setCitas] = useState([])

    useEffect(() => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/quote?author=' + personaje.name)
    }, [])

    const consultaAPI = (link) => {
        axios.get(link)
            .then(result => {
                console.log('data', result.data)
                setCitas(result.data)
            }).catch(
                console.log('error')
            )
    }
    return (
        <Card bg="dark" style={{ maxWidth: '600px' }}>
            <Card.Img src={personaje.img} variant='top' />
            <Card.Body>
                <h1>{personaje.name}</h1>
                <h5>Alias: "{personaje.nickname}"</h5>
                <h5>Estado: {personaje.status}</h5>
                <p style={{ margin: 0 }}>Categoría: {personaje.category}</p>
                <p style={{ margin: 0 }}>interpretado por: {personaje.portrayed}</p>
                <br />
                <div>
                    <p style={{ margin: 0 }}>Ocupación:</p>
                    {personaje.occupation.map((trabajo, index) => (
                        <p key={index}>{trabajo}</p>
                    ))}
                </div>
                <div>
                    <p style={{ margin: 0 }}>Apariciones en temporadas de Breaking Bad:</p>
                    <ButtonGroup>
                        {personaje.appearance.map((aparición, index) => (
                            <Button variant="danger" key={index} size="sm">{aparición}</Button>
                        ))}
                    </ButtonGroup>
                </div>
                <div>
                    <p style={{ margin: 0 }}>Apariciones en temporadas Better Call Saul:</p>
                    <ButtonGroup>
                        {personaje.better_call_saul_appearance.map((aparición, index) => (
                            <Link to={'/temporadas/' + personaje.category} key={index}><Button variant="danger" size="sm">{aparición}</Button></Link>
                        ))}
                    </ButtonGroup>
                </div>
                <Card.Footer>

                    <p style={{ margin: 0 }}>Citas:</p>
                    {citas.map((cita, index) => (
                        <p>- {cita.quote}</p>
                    ))}
                </Card.Footer>
            </Card.Body>
        </Card>

    )
}

export default PersonajeDetalle