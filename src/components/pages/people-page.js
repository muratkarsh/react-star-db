import React from 'react'
import { PersonDetails, PersonList } from "../sw-components"
import Row from "../row"
import { withRouter } from "react-router-dom"

const PeoplePage = ({ match, history }) => {
    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)}/>}
            right={<PersonDetails itemId={match.params.id} />}
        />
    )
}

export default withRouter(PeoplePage)