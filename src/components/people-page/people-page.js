import React, { Component } from  'react'
import ItemList from "../item-list"
import PersonDetails from "../person-details"
import ErrorIndicator from "../error-indicator"

export default class PeoplePage extends Component {
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