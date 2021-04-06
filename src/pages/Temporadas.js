import React from 'react'
import TemporadasList from '../components/TemporadasList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

const Temporadas = ({ dataBB, nTemporadasBB }) => (
    <div className="container">
        <h1>Bienvenido a BB&BCSapi</h1>

        <TemporadasList
            temporadas={nTemporadasBB}
            episodios={dataBB}
        />
    </div>
)

export default Temporadas