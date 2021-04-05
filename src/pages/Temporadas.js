import React from 'react'
import TemporadasList from '../components/TemporadasList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

const Temporadas = ({ data }) => (
    <div className="container">

        <h1>Bienvenido a BB&BCSapi</h1>
        <TemporadasList
            temporadas={data}
        />
    </div>
)

export default Temporadas