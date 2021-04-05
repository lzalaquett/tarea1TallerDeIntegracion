import React from 'react'
import Card from './Card'

const TemporadasList = ({ temporadas }) => (
    <div>
        { temporadas.map((temporada) => (
            <Card
                key={temporada.episode_id}
                {...temporada}
            />
        ))}
    </div>
)

export default TemporadasList