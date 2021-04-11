import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TemporadasContainer from './pages/TemporadasContainer'
import SeriesContainer from './pages/SeriesContainer'
import EpisodioContainer from './pages/EpisodioContainer'
import PersonajeContainer from './pages/PersonajeContainer'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SeriesContainer} />
            <Route exact path="/temporadas/:nombre" component={TemporadasContainer} />
            <Route exact path="/episodio/:id" component={EpisodioContainer} />
            <Route exact path="/personaje/:nombre" component={PersonajeContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App