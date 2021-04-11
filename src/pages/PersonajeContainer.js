import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Personaje from './Personaje'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const PersonajeContainer = () => {

    let { nombre } = useParams()
    const [link, setLink] = useState('https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=' + nombre)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [personaje, setPersonaje] = useState([])


    useEffect(() => {
        consultaAPI()
    }, [])

    const consultaAPI = () => {
        axios.get(link)
            .then(result => {
                setPersonaje(result.data[0])
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                setError(error)
            })
    }
    if (loading)
        return <Loading />
    if (error)
        return <h1>error 500</h1>

    return (
        <div>
            <Personaje
                personaje={personaje}
            />
        </div>)
}

export default PersonajeContainer