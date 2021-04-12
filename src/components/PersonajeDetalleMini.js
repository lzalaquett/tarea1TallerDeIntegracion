import React from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonajeDetalleMini = ({ personaje }) => (
    <Card bg="dark" style={{ maxWidth: '200px' }}>
        <Card.Img src={personaje.img} />
        <Card.Body>
            <h5>{personaje.name}</h5>
            <Link to={'/personaje/' + personaje.name} ><Button>Ver más</Button></Link>
        </Card.Body>
    </Card>

)

export default PersonajeDetalleMini