import React, { Component } from 'react'
import { PersonDetails, PersonList } from "../sw-components"
import Row from "../row"

export default class PeoplePage extends Component {
    state = {
        selectedItem: 5
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}