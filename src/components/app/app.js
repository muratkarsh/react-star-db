import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
// import RandomPlanet from '../random-planet'
import '../random-planet/random-planet.scss'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ErrorBoundary from "../error-boundary"
import { SwapiServiceProvider } from "../swapi-service-context"

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components'


export default class App extends Component {
    swapiService = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false,
        selectedPerson: 5
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    toggleRandomPlanet = () => {
        this.setState(state => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
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

        // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

        return (
            <div className='app'>
                <div className="container">
                    <ErrorBoundary>
                        <SwapiServiceProvider value={this.swapiService}>
                            <Header />
                            <Row left={<PersonList />} right={<PersonDetails />}/>
                            <Row left={<PlanetList />} right={<PlanetDetails />}/>
                            <Row left={<StarshipList />} right={<StarshipDetails />}/>
                        </SwapiServiceProvider>
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}