import React from 'react'
import TemporadasList from '../components/TemporadasList'

const Temporadas = ({ data, nTemporadas }) => {

    return (
        <div className="container">
            <h1>Bienvenido a BB&BCSapi</h1>
            {console.log(nTemporadas)}

            <TemporadasList
                temporadas={nTemporadas}
                episodios={data}
            />
        </div>
    )
}

export default Temporadas