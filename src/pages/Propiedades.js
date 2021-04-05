import React from 'react'
import PropiedadesList from '../components/PropiedadesList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

const Propiedades = ({ data }) => (
    <div>
        <Welcome
            username="Raúl"
        />
        <PropiedadesList
            propiedades={data}
        />
        <AddButton />
    </div>
)

export default Propiedades