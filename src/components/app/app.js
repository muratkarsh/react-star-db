import React from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from "../item-list"
import PersonDetails from "../person-details"

const App = () => {
    return (
        <div className='app'>
            <div className='app__wrapper'>
                <Header />
                <RandomPlanet />

                <div className='app__row'>
                    <ItemList/>
                    <PersonDetails/>
                </div>

            </div>
        </div>
    )
}

export default App