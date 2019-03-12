import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ItemDetails, { Record } from "../item-details"
import ErrorBoundary from "../error-boundary"
import ItemList from "../item-list"

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

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth year" />
                <Record field="eyeColor" label="Eye color" />
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}
            >
                <Record field='model' label='Model' />
                <Record field='length' label='Length' />
                <Record field='costInCredits' label='Cost' />
            </ItemDetails>
        )

        const personList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                itemId={this.state.selectedPerson}
                onItemSelected={this.onPersonSelected}
            >
                {(item) => {
                    return item.name
                }}
            </ItemList>
        )

        return (
            <div className='app'>
                <div className="container">
                    <Header />

                    <ErrorBoundary>
                        <Row left={personList} right={personDetails} />
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}