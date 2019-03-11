import React, { Component } from 'react'
import './random-planet.scss'
import SwapiService from '../../services/swapi-service.js'
import Spinner from '../spinner'
import ErrorIndicator from "../error-indicator"

export default class RandomPlanet extends Component {
    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * (25 - 1)) + 1

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const { planet, loading, error } = this.state

        const spinner = loading ? <Spinner /> : null
        const errorMessage = error ? <ErrorIndicator/> : null

        const hasData = !(loading || error)
        const content = hasData ? <PlanetView planet={ planet } /> : null

        return (
            <div className='random-planet app__card'>
                { spinner }
                { errorMessage }
                { content }
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotation, diameter } = planet

    return (
        <React.Fragment>
            <img className='random-planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className='random-planet__info'>
                <h3>{ name }</h3>
                <ul>
                    <li>Population: <span>{ population }</span></li>
                    <li>Rotation period: <span>{ rotation }</span></li>
                    <li>Diameter: <span>{ diameter }</span></li>
                </ul>
            </div>
        </React.Fragment>
    )
}