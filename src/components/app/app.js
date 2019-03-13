import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import ErrorBoundary from "../error-boundary"
import { SwapiServiceProvider } from "../swapi-service-context"
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import { BrowserRouter as Router, Route } from "react-router-dom"
import StarshipDetails from "../sw-components/starship-details"


export default class App extends Component {
    swapiService = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet updateInterval={100000} /> : null

        return (
            <div className='app'>
                <div className="container">
                    <ErrorBoundary>
                        <SwapiServiceProvider value={this.swapiService}>
                            <Router>
                                <div className="app__wrapper">
                                    <Header />
                                    {planet}

                                    <Route exact path='/' render={() => <h1>Welcome to StarDB</h1>} />
                                    <Route path='/people/:id?' component={PeoplePage} />
                                    <Route path='/planets' component={PlanetsPage} />
                                    <Route exact path='/starships' component={StarshipsPage} />
                                    <Route path='/starships/:id'
                                           render={({ match }) => {
                                               const { id } = match.params

                                               return <StarshipDetails itemId={id} />
                                           }}
                                    />
                                </div>
                            </Router>
                        </SwapiServiceProvider>
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}