import React from 'react'
import PropiedadesForm from '../components/PropiedadForm'
import Card from '../components/Card'

const PropiedadesNew = ({ form, onChange }) => (
    <div className="row">
        <div className="col-sm">
            <Card bg="dark"
                {...form}
            />
        </div>
        <div className="col-sm">
            <PropiedadesForm
                onChange={onChange}
                form={form}
            />
        </div>
    </div>
)

export default PropiedadesNew