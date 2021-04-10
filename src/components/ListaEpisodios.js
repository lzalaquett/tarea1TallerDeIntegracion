import React from 'react'
import Card from './Card'

const ListaEpisodios = ({ episodios }) => (
    <div>
        {episodios.map((episodio) => (
            <Card
                key={episodio.episode_id}
                {...episodio}
            />
        ))}
    </div>
)

export default ListaEpisodios