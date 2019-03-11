import React, { Component } from 'react'
import './random-planet.scss'
import SwapiService from '../../services/swapi-service.js'

export default class RandomPlanet extends Component {
    state = {
        planet: {}
    }

    swapiService = new SwapiService

    updatePlanet = () => {
        const id = Math.floor(Math.random() * (25 - 1)) + 1

        this.swapiService.getPlanet(id)
            .then(planet => this.setState({ planet }))
    }

    constructor(props) {
        super(props);
        this.updatePlanet()
    }

    render() {
        const { planet: { id, name, population, rotation, diameter } } = this.state

        return (
            <div className='random-planet app__card'>
                <img className='random-planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                <div className='random-planet__info'>
                    <h3>{ name }</h3>

                    <ul>
                        <li>Population: <span>{ population }</span></li>
                        <li>Rotation period: <span>{ rotation }</span></li>
                        <li>Diameter: <span>{ diameter }</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}