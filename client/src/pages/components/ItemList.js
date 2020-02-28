import React from 'react'

const renderItems = (items) => {
    console.log(items)
    return items.map(item => {
        return (
            <li className="trip-item">
                <div className="list-details">
                    <span className="list-name">{item.itemName}</span>
                    <span className="list-size">{item.itemSize}</span>
                    <span className="list-price">{item.itemPrice}</span>
                    <span className="list-quantity">{item.itemQuantity}</span>
                </div>
                <div className="list-remove-button">REMOVE</div>
            </li>
        )
    })
   
}

const ItemList = ({ tripItems }) => {
    return(
        <div className="itemlist-container">
            <ul>
                {renderItems(tripItems)}
            </ul>
        </div>
    )
}

export default ItemList