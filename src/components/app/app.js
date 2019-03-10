import React from 'react'
import './app.scss'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from "../item-list"
import PersonDetails from "../person-details"

const App = () => {
    return (
        <div className='app'>
            <div className="container">
                <Header />

                <div className="row">
                    <div className="col col-xs-12">
                        <RandomPlanet />
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-12 col-lg-6">
                        <ItemList />
                    </div>

                    <div className="col col-md-12 col-lg-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App