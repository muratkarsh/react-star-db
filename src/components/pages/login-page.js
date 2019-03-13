import React from 'react'
import { Redirect } from "react-router-dom"

const LoginPage = ({ onLogin, isLoggedIn }) => {
    if (isLoggedIn) return <Redirect to='/' />

    return (
        <div>
            <button onClick={onLogin}>login</button>
        </div>
    )
}

export default LoginPage