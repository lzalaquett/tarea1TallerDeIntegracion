import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


const SelectTemporada = ({ temporada }) => (
    <div>
        <br />
        <Button variant="primary" size="lg" block>Temporada {temporada}</Button>{' '}
    </div>
)

export default SelectTemporada