import React from 'react'
import TemporadasList from '../components/TemporadasList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

const Temporadas = ({ data, nTemporadas }) => (
    <div className="container">
        <h1>Bienvenido a BB&BCSapi</h1>

        <TemporadasList
            temporadas={nTemporadas}
            episodios={data}
        />
    </div>
)

export default Temporadas