import React, { Component } from 'react'
import './person-details.scss'
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner"
import ErrorButton from "../error-button"

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson = () => {
        this.setState({loading: true})

        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then(person => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }


    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender,
                birthYear, eyeColor } = this.state.person

        return (
            <div className='person-details app__card'>
                <img className='person-details__img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character"/>
                <div className='person-details__info'>
                    <h3>{name} {id}</h3>

                    <ul>
                        <li>Gender: <span>{gender}</span></li>
                        <li>Birth year: <span>{birthYear}</span></li>
                        <li>Eye color: <span>{eyeColor}</span></li>
                    </ul>

                    <ErrorButton />
                </div>
            </div>
        )
    }
}