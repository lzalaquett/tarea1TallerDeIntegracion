import React from 'react'
import Card from './Card'

const PropiedadesList = ({ propiedades }) => (
    <div>
        { propiedades.map((propiedad) => (
            <Card bg="dark"
                key={propiedad.id}
                {...propiedad}
            />
        ))}
    </div>
)

export default PropiedadesList