import React from 'react'

const ItemTile = ({ item }) => {
    
    return(
        <div className="item-tile">
            <div className="item-tile-header">
                <h4>{item.name}</h4>
            </div>
            <div className="item-tile-body">
                <img alt="item" src={item.img}/>
            </div>
            <div className="item-tile-details">
            <span className="price details-item">
                <div className="hebrew">ש"ח</div>
                    {item.price}
                </span>
            </div>
        
        </div>
    )
}

export default ItemTile