import React, { Component } from 'react'
import './item-list.scss'
import SwapiService from "../../services/swapi-service"
import { withData } from '../hoc-helpers/'

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

const { getAllPeople } = new SwapiService()

export default withData(ItemList, getAllPeople)