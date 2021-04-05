import React, { useState } from 'react'
import Loading from '../components/Loading'
import Propiedades from './Propiedades'

const PropiedadesContainer = () => {
    const [data, setData] = useState([
        {
            "id": 1,
            "title": "Center Apartment",
            "description": "5 rooms, 4 bathrooms & 2 balconies",
            "img": "https://www.hogares.cl/wp-content/uploads/2018/06/SLA_3734.jpg",
            "leftColor": "#00C5F0",
            "rightColor": "#00FAB0"
        }, {
            "id": 2,
            "title": "Suburb Apartment",
            "description": "3 rooms, 3 bathrooms, balconie, pool & parking",
            "img": "https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896",
            "leftColor": "#F0A700",
            "rightColor": "#F00400"
        }, {
            "id": 3,
            "title": "Industrial Penthouse",
            "description": "7 rooms, 5 bathroobs, 3 balconies, pool in the roof, parking & ptivate gym",
            "img": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d0f16f334a5c40008492f2e%2F0x0.jpg",
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        }, {
            "id": 4,
            "title": "center apartment",
            "description": "2 rooms, 2 bathrooms",
            "img": "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/06/214217130.jpg?quality=80&strip=all&ssl=1",
            "leftColor": "#9000F0",
            "rightColor": "#00B3F0"
        }
    ])
    const [loading, setLoadinf] = useState(false)
    const [error, setError] = useState(null)


    if (loading)
        return <Loading />
    return <Propiedades
        data={data}
    />
}

/* 
class PropiedadesContainer extends React.Component {
    state = {
        data: [{
            "id": 1,
            "title": "Center Apartment",
            "description": "5 rooms, 4 bathrooms & 2 balconies",
            "img": "https://www.hogares.cl/wp-content/uploads/2018/06/SLA_3734.jpg",
            "leftColor": "#00C5F0",
            "rightColor": "#00FAB0"
        }, {
            "id": 2,
            "title": "Suburb Apartment",
            "description": "3 rooms, 3 bathrooms, balconie, pool & parking",
            "img": "https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896",
            "leftColor": "#F0A700",
            "rightColor": "#F00400"
        }, {
            "id": 3,
            "title": "Industrial Penthouse",
            "description": "7 rooms, 5 bathroobs, 3 balconies, pool in the roof, parking & ptivate gym",
            "img": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d0f16f334a5c40008492f2e%2F0x0.jpg",
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        }, {
            "id": 4,
            "title": "center apartment",
            "description": "2 rooms, 2 bathrooms",
            "img": "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/06/214217130.jpg?quality=80&strip=all&ssl=1",
            "leftColor": "#9000F0",
            "rightColor": "#00B3F0"
        }],
        loading: false,
        error: null
    }
    render() {
        if (this.state.loading)
            return <Loading />
        return <Propiedades
            data={this.state.data}
        />
    }
}*/

export default PropiedadesContainer