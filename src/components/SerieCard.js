import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import imgBB from '../imgs/Breaking Bad.jpg'
import imgCBS from '../imgs/Better Call Saul.jpg'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const SerieCard = ({ nombre }) => (
    <Link to={'/temporadas/' + nombre} style={{ textDecoration: 'none' }}>
        <Card bg="dark" min-width="200px">
            <Card.Body>
                <h3>{nombre || 'nombre de la serie'}</h3>
            </Card.Body>
            {nombre === "Breaking Bad" && <Card.Img variant='bottom' src={imgBB} width='100%' max-width='300' />}
            {nombre === "Better Call Saul" && <Card.Img variant='bottom' src={imgCBS} width='100%' max-width='300' />}
        </Card>
    </Link>
)

export default SerieCard
