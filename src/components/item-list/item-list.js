import React, { Component } from 'react'
import './item-list.scss'
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner"

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(people => {
                this.setState({
                        peopleList: people
                    })
            })
    }

    renderItems = (arr) => {
        return arr.map(({ id, name }) => {
            return (
                <li
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {
        const { peopleList } = this.state

        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList)

        return (
            <div className='item-list app__card'>
                <ul className='item-list-actions'>
                    {items}
                </ul>
            </div>
        )
    }
}