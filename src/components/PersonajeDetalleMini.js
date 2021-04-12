import React from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonajeDetalleMini = ({ personaje }) => (
    <Card bg="dark" style={{ minWidth: '120px', maxWidth: '500px', margin: '0' }}>
        <Card.Img src={personaje.img} />
        <Card.Body>
            <h5>{personaje.name}</h5>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'rgb(96 96 96)' }}>
            <Link to={'/personaje/' + personaje.name} ><Button variant="danger">Ver más</Button></Link>
        </Card.Footer>
    </Card>

)

export default PersonajeDetalleMini