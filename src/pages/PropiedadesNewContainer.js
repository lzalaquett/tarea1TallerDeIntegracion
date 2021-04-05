import React from 'react'
import PropiedadesNew from './PropiedadesNew'

class PropiedadesNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return <PropiedadesNew
            form={this.state.form}
            onChange={this.handleChange}
        />
    }
}

export default PropiedadesNewContainer