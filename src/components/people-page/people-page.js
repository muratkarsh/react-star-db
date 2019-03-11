import React, { Component } from  'react'
import ItemList from "../item-list"
import PersonDetails from "../person-details"
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"

export default class PeoplePage extends Component {
    swapiService = new SwapiService()

    state = {
        selectedPerson: 5,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
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

        return (
            <div className="row">
                <div className="col col-md-12 col-lg-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
                    />
                </div>

                <div className="col col-md-12 col-lg-6">
                    <PersonDetails
                        personId={this.state.selectedPerson}
                    />
                </div>
            </div>
        )
    }
}