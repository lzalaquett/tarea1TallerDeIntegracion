import React from 'react'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Badge, Button, Card } from 'react-bootstrap'
import imgEpisodio from '../imgs/imgEpisodio.jpg'
import { Link } from 'react-router-dom'

const CardEpisodio = ({ episode_id, title, season, episode, air_date, characters, series, onClick }) => (

    <Card style={{ minWidth: '250px', width: '250px', maxWidth: '250px' }}>
        <Card.Img variant="top" src={imgEpisodio} style={{ opacity: '0.7' }} />
        <div className="card-body">
            <h5>S{season} E{episode || 'episodio'}: {title || 'TITULO'}</h5>
            <div>
                <Badge variant="info">{series || 'serie'} Id: {episode_id || 'id'}</Badge>
            </div>
            <br />
            <div>
                <Link to={'/episodio/' + episode_id}>
                    <Button data-episode_id={episode_id}>Ver más</Button>
                </Link>
            </div>
        </div>
    </Card>
)


export default CardEpisodio;