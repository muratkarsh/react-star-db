import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="/#">Star DB</a>
            </div>

            <div className='navigation'>
                <ul>
                    <li><a href="/#">People</a></li>
                    <li><a href="/#">Planets</a></li>
                    <li><a href="/#">Starships</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header