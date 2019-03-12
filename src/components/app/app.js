import React, { Component } from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ItemDetails, { Record } from "../item-details"

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

        const personDetails = (
            <ItemDetails
                itemId={11}
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

        return (
            <div className='app'>
                <div className="container">
                    <Header />

                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    >

                    </Row>

                    {/*<div className="row">*/}
                        {/*<button onClick={this.toggleRandomPlanet}>Toggle random planet</button>*/}
                        {/*<ErrorButton/>*/}
                    {/*</div>*/}

                    {/*<div className="row">*/}
                        {/*<div className="col col-xs-12">*/}
                            {/*{planet}*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*<PeoplePage />*/}
                </div>
            </div>
        )
    }
}