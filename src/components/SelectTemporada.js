import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


const SelectTemporada = ({ temporada, onClick }) => {


    return (
        <div>
            <br />
            <Button variant="primary" size="lg" block data-temporada={temporada} onClick={onClick} key={temporada}>Temporada {temporada}</Button>
        </div>
    )
}

export default SelectTemporada