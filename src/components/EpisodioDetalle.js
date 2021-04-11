import React from 'react'
import { Card, Button } from 'react-bootstrap'
import WallpaperBB from '../imgs/wallpaperBB.jpg'
import WallpaperBCS from '../imgs/wallpaperBCS.jpg'
import { Link } from 'react-router-dom'

const EpisodioDetalle = ({ episodio }) => (
    <Card bg="dark">
        {episodio.series === "Breaking Bad" && <Card.Img variant='bottom' src={WallpaperBB} width='100%' max-width='300' />}
        {episodio.series === "Better Call Saul" && <Card.Img variant='bottom' src={WallpaperBCS} width='100%' max-width='300' />}
        <Card.Body>
            <h1>{episodio.title}</h1>
            <h4>Temporada {episodio.season} Episodio {episodio.episode}</h4>
            <p>Fecha de publicación {episodio.air_date}</p>
            <div>
                <p style={{ margin: 0 }}>Elenco:</p>
                {episodio.characters.map((personaje, index) =>
                    <Link to={'/personaje/' + personaje} key={index.toString()}><Button variant="danger" size="sm" style={{ margin: 5 }}>{personaje}</Button></Link>
                )}
            </div>
        </Card.Body>
    </Card>
)

export default EpisodioDetalle