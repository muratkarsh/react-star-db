import React from 'react'
import './error-indicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img className='error-icon' src={icon} alt="error icon"/>
            <span className='error-title'>Something has gone wrong.</span>
        </div>
    )
}

export default ErrorIndicator