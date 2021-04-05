import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropiedadesContainer from './pages/PropiedadesContainer'
import PropiedadesNewContainer from './pages/PropiedadesNewContainer'
import TemporadasContainer from './pages/TemporadasContainer'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/propiedades" component={PropiedadesContainer} />
            <Route exact path="/propiedades/new" component={PropiedadesNewContainer} />
            <Route exact path="/temporadas" component={TemporadasContainer} />
            <Route exact path="/" component={TemporadasContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App