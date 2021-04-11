import React, { Component } from 'react'
import Loading from '../components/Loading'
import Series from './Series'

class SeriesContainer extends Component {

    constructor(props) {
        super(props)
        //en el estado guardamos los nombres de las series en un arreglo
        this.state = {
            data: [],
            series: [],
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes')
            let data = await res.json()
            this.setState({ data })

            var series = []

            data.map((episodio) => {
                var nombreSerie = episodio.series
                const pos = series.indexOf(nombreSerie)
                if (pos < 0) {
                    series.push(nombreSerie)
                }
            })
            this.setState({ series, loading: false })

        } catch (error) {
            this.setState({ loading: false, error })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading />

        if (this.state.error)
            return <h1>ERROR</h1>

        return <Series
            series={this.state.series}
        />
    }
}

export default SeriesContainer