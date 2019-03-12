import React from 'react'
import ItemDetails, { Record } from "../item-details"
import { SwapiServiceConsumer } from "../swapi-service-context"

const PlanetDetails = () => (
    <SwapiServiceConsumer>
        {(swapiService) => {
            return (
                <ItemDetails
                    itemId={5}
                    getData={swapiService.getPlanet}
                    getImageUrl={swapiService.getPlanetImage}
                >
                    <Record field='name' label='Name' />
                    <Record field='population' label='Population' />
                    <Record field='rotation' label='Rotation' />
                    <Record field='diameter' label='Diameter' />
                </ItemDetails>
            )
        }}
    </SwapiServiceConsumer>
)

const StarshipDetails = () => (
    <SwapiServiceConsumer>
        {(swapiService) => {
            return (
                <ItemDetails
                    itemId={5}
                    getData={swapiService.getStarship}
                    getImageUrl={swapiService.getStarshipImage}
                >
                    <Record field='model' label='Model' />
                    <Record field='length' label='Length' />
                    <Record field='costInCredits' label='Cost' />
                </ItemDetails>
            )
        }}
    </SwapiServiceConsumer>
)

export {
    PlanetDetails,
    StarshipDetails
}