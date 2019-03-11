import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import PeoplePage from "../people-page"
import ErrorButton from "../error-button"

export default class App extends Component {
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
                </div>
            </div>
        )
    }
}