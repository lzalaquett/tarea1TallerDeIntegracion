import React, { Component } from 'react'
import axios from 'axios'
import Temporadas from './Temporadas'

class TemporadasContainer extends Component {

    state = {
        dataBB: [],
        dataBCS: [],
        nTemporadasBB: [],
        nTemporadasBCS: []
    }

    async componentDidMount() {
        await this.fetchTemporadas()
    }

    fetchTemporadas = async () => {
        let resBB = await fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
        let dataBB = await resBB.json()

        let resBCS = await fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
        let dataBCS = await resBCS.json()


        this.setState({ dataBB })
        this.setState({ dataBCS })

        this.contarTemporadas(dataBB, dataBCS)

    }

    contarTemporadas = (dataBB, dataBCS) => {

        var nTemporadasBB = []
        dataBB.map((episodio) => {
            var temporada = parseInt(episodio.season, 10)
            const pos = nTemporadasBB.indexOf(temporada)
            if (pos < 0) {
                nTemporadasBB.push(temporada)
            }
        })

        var nTemporadasBCS = []
        dataBCS.map((episodio) => {
            var temporada = parseInt(episodio.season, 10)
            const pos = nTemporadasBCS.indexOf(temporada)
            if (pos < 0) {
                nTemporadasBCS.push(temporada)
            }
        })
        this.setState({ nTemporadasBB })
        this.setState({ nTemporadasBCS })
    }

    //componentDidMount() {
    //    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
    //        .then(result => {
    //            console.log(result.data)
    //        }).catch(console.log)
    //}

    render() {
        return <Temporadas
            dataBB={this.state.dataBB}
            dataBCS={this.state.dataBCS}
            nTemporadasBB={this.state.nTemporadasBB}
            nTemporadasBCS={this.state.nTemporadasBCS}
        />
    }

}

export default TemporadasContainer