import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from "../item-list"
import PersonDetails from "../person-details"

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5
    }

    toggleRandomPlanet = () => {
        this.setState(state => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
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
                    </div>

                    <div className="row">
                        <div className="col col-xs-12">
                            {planet}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-md-12 col-lg-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                            />
                        </div>

                        <div className="col col-md-12 col-lg-6">
                            <PersonDetails
                                personId={this.state.selectedPerson}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}