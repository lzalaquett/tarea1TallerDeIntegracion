import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Episodio from './Episodio'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'


const EpisodioContainer = () => {

    let { id } = useParams()
    const [link, setLink] = useState('https://tarea-1-breaking-bad.herokuapp.com/api/episodes/' + id)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [episodio, setEpisodio] = useState([])

    useEffect(() => {
        consultaAPI()
    }, [])

    const consultaAPI = () => {
        console.log(link)
        axios.get(link)
            .then(result => {
                setEpisodio(result.data[0])
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
            <Episodio
                episodio={episodio}
            />
        </div>)
}

export default EpisodioContainer