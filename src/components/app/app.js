import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import ErrorBoundary from "../error-boundary"
import { SwapiServiceProvider } from "../swapi-service-context"
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'


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

        const planet = this.state.showRandomPlanet ? <RandomPlanet updateInterval={5000} /> : null

        return (
            <div className='app'>
                <div className="container">
                    <ErrorBoundary>
                        <SwapiServiceProvider value={this.swapiService}>
                            <Header />

                            {planet}

                            <PeoplePage />
                            <PlanetsPage />
                            <StarshipsPage />

                        </SwapiServiceProvider>
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}