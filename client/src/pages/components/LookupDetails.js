import React from 'react'
import { renderItemSize } from './helpers'
import LookupButtons from './LookupButtons'

const ItemDetails = ({ selectedItem, setSelectedItem }) => {
    const labels = {
        itemName: 'Item: ',
        itemPrice: 'Price: ',
        itemSize: 'Size: ',
        itemQuantity: 'Quantity: '
    }

    if (!selectedItem) return null

    return(
        <div className="lookup-details-container">
            <img className="item-preview lookup-img" alt="item" src={selectedItem.img}/>
            <div className="lookup-details-inner">
                <div className="lookup-data-labels">
                    <span className="details-name details-item">
                        {labels.itemName}
                    </span>
                    <span className="details-price details-item">
                        {labels.itemPrice}
                    </span>
                    {selectedItem.size && <span className="details-size details-item">
                        {labels.itemSize}
                    </span>}
                    <span className="details-quantity details-item">
                        {labels.itemQuantity}
                    </span>
                </div>
                <div className="lookup-data">
                    <span className="name details-item">
                        {selectedItem.name}
                    </span>
                    <span className="price details-item">
                        <div className="hebrew">ש"ח</div>
                        {selectedItem.price}
                    </span>
                        {renderItemSize(selectedItem.size)}
                    <div className="quantity-container">
                    <span className="quantity-label">
                        <span className="hebrew">יח</span>
                        {selectedItem.quantity}
                    </span>
                </div>
            </div>
        </div>
        <LookupButtons item={selectedItem} setSelectedItem={setSelectedItem}/>
    </div>
    )
}

export default ItemDetails