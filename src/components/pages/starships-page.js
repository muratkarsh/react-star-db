import React, { Component } from 'react'
import { StarshipList, StarshipDetails } from "../sw-components"
import Row from "../row"

export default class StarshipsPage extends Component {
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
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}