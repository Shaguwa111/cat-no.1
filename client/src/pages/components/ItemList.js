import React from 'react'
import { useSelector } from 'react-redux'
import { renderItems } from './helpers'

const ItemList = ({ id }) => {
    const trip = useSelector(state => state.trips.find(trip => trip._id === id))

    return(
        <div className="itemlist-container">
            <ul>
                {renderItems(trip.items)}
            </ul>
        </div>
    )
}

export default ItemList