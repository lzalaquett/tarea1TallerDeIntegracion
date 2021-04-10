import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TemporadasContainer from './pages/TemporadasContainer'
import SeriesContainer from './pages/SeriesContainer'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SeriesContainer} />
            <Route exact path="/temporadas/:nombre" component={TemporadasContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App