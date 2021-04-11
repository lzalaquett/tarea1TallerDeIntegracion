import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


const SelectTemporada = ({ temporada, onClick }) => {


    return (
        <div>
            <br />
            <Button variant="danger" block data-temporada={temporada} onClick={onClick} style={{ minWidth: '150px' }}>Temporada {temporada}</Button>
        </div>
    )
}

export default SelectTemporada