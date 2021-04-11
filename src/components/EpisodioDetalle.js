import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import WallpaperBB from '../imgs/wallpaperBB.jpg'

const EpisodioDetalle = ({ episodio }) => (
    <Card bg="light">
        {console.log(episodio)}
        <Card.Img variant="top" src={WallpaperBB} />
        <Card.Body>
            <h1>{episodio.title}</h1>
            <h4>Temporada {episodio.season} Episodio {episodio.episode}</h4>
            <p>Fecha de publicación {episodio.air_date}</p>
            <ButtonGroup vertical   >
                {episodio.characters.map((personaje, index) => (
                    <Button variant="primary" key={index}>{personaje}</Button>
                ))}
            </ButtonGroup>
        </Card.Body>
    </Card >
)

export default EpisodioDetalle