import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import PeoplePage from "../people-page"
import ErrorButton from "../error-button"
import ItemList from "../item-list"
import SwapiService from "../../services/swapi-service"
import PlanetDetails from "../planet-details"

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false
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

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

        return (
            <div className='app'>
                <div className="container">
                    <Header />

                    <div className="row">
                        <button
                            onClick={this.toggleRandomPlanet}
                        >
                            Toggle random planet
                        </button>

                        <ErrorButton/>
                    </div>

                    <div className="row">
                        <div className="col col-xs-12">
                            {planet}
                        </div>
                    </div>

                    <PeoplePage />

                    <div className="row">
                        <div className="col col-md-12 col-lg-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapiService.getAllPlanets}
                                renderItem={(item) => <span>{item.name}<button>!</button></span>}
                            />
                        </div>

                        <div className="col col-md-12 col-lg-6">
                            <PlanetDetails
                                personId={this.state.selectedPerson}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-md-12 col-lg-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapiService.getAllStarships}
                                renderItem={(item) => item.name}
                            />
                        </div>

                        <div className="col col-md-12 col-lg-6">
                            <PlanetDetails
                                personId={this.state.selectedPerson}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}