import React from 'react'
import './header.scss'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">Star DB</Link>
            </div>

            <div className='navigation'>
                <ul>
                    <li><Link to="/people/">People</Link></li>
                    <li><Link to="/planets/">Planets</Link></li>
                    <li><Link to="/starships/">Starships</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header