import React, { Component } from 'react'
import axios from 'axios'
import Temporadas from './Temporadas'

class TemporadasContainer extends Component {

    state = {
        data: []
    }

    async componentDidMount() {
        await this.fetchTemporadas()
    }

    fetchTemporadas = async () => {
        let res = await fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
        let data = await res.json()

        console.log(data)

        this.setState({ data })

    }


    //componentDidMount() {
    //    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
    //        .then(result => {
    //            console.log(result.data)
    //        }).catch(console.log)
    //}

    render() {
        return <Temporadas
            data={this.state.data}
        />
    }

}

export default TemporadasContainer