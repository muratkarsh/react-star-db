import React from 'react'
import './person-details.scss'

const PersonDetails = () => {
    return (
        <div className='person-details app__card'>
            <img className='person-details__img' src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt=""/>
            <div className='person-details__info'>
                <h3>R2-D2</h3>

                <ul>
                    <li>Gender: <span>male</span></li>
                    <li>Birth year: <span>43</span></li>
                    <li>Eye color: <span>ha-ha!</span></li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails