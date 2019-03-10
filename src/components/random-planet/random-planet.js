import React from 'react'
import './random-planet.scss'

const RandomPlanet = () => {
    return (
        <div className='random-planet app__card'>
            <img className='random-planet__img' src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt=""/>
            <div className='random-planet__info'>
                <h3>Planet name</h3>

                <ul>
                    <li>Population: <span>102495</span></li>
                    <li>Rotation period: <span>95</span></li>
                    <li>Diametr: <span>100</span></li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet