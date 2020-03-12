import React from 'react'
import { displayLongString } from './helpers'

const ItemTile = ({ item, setSelectedItem }) => {

    return(
        <div key={item._id} className="item-tile" onClick={() =>{
            setSelectedItem(item)
        }
        }>
            <div className="item-tile-header">
                <p>{displayLongString(item.name)}</p>
            </div>
            <div className="item-tile-body">
                <img alt="item" src={item.img}/>
            </div>
            <div className="item-tile-details">
            <span className="price details-item item-tile-bottom tile-version">
                <div className="hebrew tile-version">ש"ח</div>
                    {item.price}
                </span>
            </div>
        
        </div>
    )
}

export default ItemTile