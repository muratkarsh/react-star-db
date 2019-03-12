import React from 'react'
import ItemDetails, { Record } from "../item-details"
import { withSwapiService } from '../hoc-helpers'

const PersonDetails = ({ swapiService }) => {
    return (
        <ItemDetails
            itemId={5}
            getData={swapiService.getPerson}
            getImageUrl={swapiService.getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth year" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>
    )
}

export default withSwapiService(PersonDetails)