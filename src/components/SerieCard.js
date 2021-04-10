import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import imgBB from '../imgs/Breaking Bad.jpg'
import imgCBS from '../imgs/Better Call Saul.jpg'
import { Link } from 'react-router-dom'

const SerieCard = ({ key, nombre }) => (
    <Link to={'/temporadas/' + nombre} style={{ textDecoration: 'none' }}>
        <div className="card">
            <div className="card-body">
                <h3>{nombre || 'nombre de la serie'}</h3>
                {nombre === "Breaking Bad" && <img src={imgBB} height='250' />}
                {nombre === "Better Call Saul" && <img src={imgCBS} height='250' />}
            </div>
        </div>
    </Link>
)

export default SerieCard
