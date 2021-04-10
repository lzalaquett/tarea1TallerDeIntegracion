import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import imgBB from '../imgs/Breaking Bad.jpg'
import imgCBS from '../imgs/Better Call Saul.jpg'
import { Link } from 'react-router-dom'

const SerieCard = ({ nombre }) => (
    <Link to={'/temporadas/' + nombre} style={{ textDecoration: 'none' }}>
        <div className="card" min-width="200px">
            <div className="card-body">
                <h3>{nombre || 'nombre de la serie'}</h3>
                {nombre === "Breaking Bad" && <img src={imgBB} alt="portada de la serie" width='100%' max-width='300' />}
                {nombre === "Better Call Saul" && <img src={imgCBS} alt="portada de la serie" width='100%' max-width='300' />}
            </div>
        </div>
    </Link>
)

export default SerieCard
