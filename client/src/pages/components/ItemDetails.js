import React from 'react'
import { ReactComponent as PlusSignSVG } from '../../resources/plus-circle.svg'
import { ReactComponent as MinusSignSVG } from '../../resources/minus-circle.svg'
import { renderItemSize } from './helpers'

const ItemDetails = ({ selectedItem, setSelectedItem }) => {
    const labels = {
        itemName: 'Item: ',
        itemPrice: 'Price: ',
        itemSize: 'Size: ',
        itemQuantity: 'Quantity: '
    }

    if (!selectedItem) return null

    return(
        <div className="details-container">
            <div className="item-details-container">
                <div className="details">
                <div className="details-labels">
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
                <div className="details-data">
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
                    <div className="details-quantity-select">
                        <MinusSignSVG className="plusminus minus" onClick={() => setSelectedItem({...selectedItem, quantity: selectedItem.quantity - 1})}/>
                        <PlusSignSVG className="plusminus plus" onClick={() => setSelectedItem({...selectedItem, quantity: selectedItem.quantity + 1})}/>
                    </div>
                </div>
                </div>
            </div>
            <img className="item-preview" alt="item" src={selectedItem.img}/>
        </div>
    </div>
    )
}

export default ItemDetails