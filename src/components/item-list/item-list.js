import React from 'react'
import './item-list.scss'

const ItemList = (props) => {
    const { data } = props

    const items = data.map((item) => {
        const { id } = item
        const label = props.children(item)

        return (
            <li
                key={id}
                onClick={() => props.onItemSelected(id)}
            >
                {label}
            </li>
        )
    })

    return (
        <div className='item-list app__card'>
            <ul className='item-list-actions'>
                {items}
            </ul>
        </div>
    )
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

export default ItemList