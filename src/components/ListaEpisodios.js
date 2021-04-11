import React from 'react'
import CardEpisodio from './CardEpisodio'
import { CardDeck } from 'react-bootstrap'

const ListaEpisodios = ({ episodios }) => (
    <div>
        <CardDeck>
            {episodios.map((episodio) => (
                <CardEpisodio
                    key={episodio.episode_id}
                    {...episodio}
                />
            ))}
        </CardDeck>
    </div>
)

export default ListaEpisodios