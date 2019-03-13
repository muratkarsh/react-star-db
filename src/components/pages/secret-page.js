import React from 'react'
import { Redirect } from "react-router-dom"

const SecretPage = ({ isLoggedIn }) => {
    if (!isLoggedIn) return <Redirect to='/login'/>

    return (
        <div>
            Secret page. Only for logged in users.
        </div>
    )
}

export default SecretPage