import React from "react"
import ItemList from '../item-list'
import { withDataLists } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>

const PersonList = withDataLists(
                    withChildFunction(ItemList, renderName),
                    getAllPeople)

const PlanetList = withDataLists(
                    withChildFunction(ItemList, renderName),
                    getAllPlanets)

const StarshipList = withDataLists(
                        withChildFunction(ItemList, renderModelAndName),
                        getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}