import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Temporadas from './Temporadas'
import { useParams, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

const TemporadasContainer2 = () => {
    let { nombre } = useParams()
    const [episodios, setEpisodios] = useState([])
    const [nTemporadas, setNTemporadas] = useState([])
    const [link, setLink] = useState('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)




    useEffect(() => {
        console.log("pasa por el efect")
        return consultaAPI()
    }, [])

    const consultaAPI = () => {
        var link = ''
        if (nombre === 'Breaking Bad') {

            link = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad'
        } else if (nombre === 'Better Call Saul') {
            link = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul'
        } else {
            <Redirect to='/' />
        }

        setLink(link)

        console.log('episodio antes', episodios)
        axios.get(link)
            .then(result => {
                let nTemporadas = []
                setEpisodios(result.data)
                episodios.map((episodio) => {
                    var temporada = parseInt(episodio.season, 10)
                    const pos = nTemporadas.indexOf(temporada)
                    if (pos < 0) {
                        nTemporadas.push(temporada)
                    }
                })
                setNTemporadas(nTemporadas)
                setLoading(false)
                console.log(nTemporadas)
            }).catch(error => {
                console.log('error', error)
                setLoading(false)
                setError(error)
            })

        console.log('episodio despues', episodios)
    }


    if (loading)
        return <Loading />
    if (error)
        return <h1>error 500</h1>
    return <Temporadas
        data={episodios}
        nTemporadas={nTemporadas}
    />
}

export default TemporadasContainer2