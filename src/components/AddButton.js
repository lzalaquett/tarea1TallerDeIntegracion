import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <div>
        <Link to="/propiedades/new">
            <img src="https://image.flaticon.com/icons/png/512/189/189689.png" height='100' />
        </Link>
    </div>
)

export default AddButton