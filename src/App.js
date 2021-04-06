import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TemporadasContainer from './pages/TemporadasContainer'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/temporadas" component={TemporadasContainer} />
            <Route exact path="/" component={TemporadasContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App