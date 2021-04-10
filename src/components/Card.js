import React from 'react';
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';

const Card = ({ episode_id, title, season, episode, air_date, characters, series }) => (
    <div className="card">
        <div className="card-header">
            <h4> id: {episode_id || 'id'} Titulo: {title || 'TITULO'}</h4>
        </div>
        <div className="card-body">
            <div>
                <p>Serie: {series || 'serie'}</p>
                <p>temporada: {season}</p>
                <p>Episodio: {episode || 'episodio'}</p>
                <p>publicación: {air_date || 'publicación'}</p>
                <p>personajes: {characters || 'personajes'}</p>
            </div>
        </div>
    </div>
)


export default Card;