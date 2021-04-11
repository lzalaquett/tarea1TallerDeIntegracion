import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


const SelectTemporada = ({ temporada, onClick }) => {


    return (
        <div>
            <br />
            <Button variant="primary" block data-temporada={temporada} onClick={onClick} >Temporada {temporada}</Button>
        </div>
    )
}

export default SelectTemporada