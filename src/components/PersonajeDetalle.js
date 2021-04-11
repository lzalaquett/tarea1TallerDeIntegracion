import React from 'react'
import { Card, ButtonGroup, Button, Row, Col } from 'react-bootstrap'

const PersonajeDetalle = ({ personaje }) => (
    <Card bg="dark" style={{ maxWidth: 400 }}>
        {console.log(personaje)}
        <Card.Img src={personaje.img} />
        <Card.Body>
            <h1>{personaje.name}</h1>
            <h5>Alias: "{personaje.nickname}"</h5>
            <h5>Estado: {personaje.status}</h5>
            <p style={{ margin: 0 }}>Categoría: {personaje.category}</p>
            <p style={{ margin: 0 }}>Portrayed : {personaje.portrayed}</p>
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
                        <Button variant="danger" key={index} size="sm">{aparición}</Button>
                    ))}
                </ButtonGroup>
            </div>
        </Card.Body>
    </Card >

)

export default PersonajeDetalle