import React, { Component } from 'react'
import './item-list.scss'
import Spinner from "../spinner"
import SwapiService from "../../services/swapi-service"

const ItemList = (props) => {
    const { data } = props

    const items = data.map((item) => {
        const { id } = item
        const label = props.children(item)

        return (
            <li
                key={id}
                onClick={() => props.onItemSelected(id)}
            >
                {label}
            </li>
        )
    })

    return (
        <div className='item-list app__card'>
            <ul className='item-list-actions'>
                {items}
            </ul>
        </div>
    )
}

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null
        }

        componentDidMount() {
            getData()
                .then(data => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const { data } = this.state

            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
}

const { getAllPeople } = new SwapiService()

export default withData(ItemList, getAllPeople)