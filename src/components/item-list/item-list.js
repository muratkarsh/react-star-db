import React from 'react'
import './item-list.scss'

const ItemList = () => {
    return (
        <div className='item-list app__card'>
            <ul className='item-list-actions'>
                <li>Luke Skywalker</li>
                <li>Darth Vader</li>
                <li>R2-D2</li>
            </ul>
        </div>
    )
}

export default ItemList