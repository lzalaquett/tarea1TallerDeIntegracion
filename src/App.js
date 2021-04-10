import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TemporadasContainer from './pages/TemporadasContainer'
import TemporadasContainer2 from './pages/TemporadasContainer2'
import SeriesContainer from './pages/SeriesContainer'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SeriesContainer} />
            <Route exact path="/temporadas/:nombre" component={TemporadasContainer2} />
            <Route exact path="/temporadas" component={TemporadasContainer} />
            <Route exact path="/temporadas" component={TemporadasContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App