import React from 'react'
import ItemDetails, { Record } from "../item-details"
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} =  swapiService

const PersonDetails = () => (
    <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={getPersonImage}
    >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth year" />
        <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
)

const PlanetDetails = () => (
    <ItemDetails
        itemId={5}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
    >
        <Record field='name' label='Name' />
        <Record field='population' label='Population' />
        <Record field='rotation' label='Rotation' />
        <Record field='diameter' label='Diameter' />
    </ItemDetails>
)

const StarshipDetails = () => (
    <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
    >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />
    </ItemDetails>
)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}