import React, { Component } from 'react'
import { PlanetList, PlanetDetails } from "../sw-components"
import Row from "../row"

export default class PlanetsPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}