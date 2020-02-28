import React from 'react'
import { ReactComponent as PlusSignSVG } from '../../resources/plus-circle.svg'
import { ReactComponent as MinusSignSVG } from '../../resources/minus-circle.svg'

const ItemDetails = ({imageLink, itemName, itemPrice, itemQuantity,  itemSize}) => {
    return(
        <div className="details-container">
            <div className="item-details-container">
                <div className="details-labels">
                    <span className="details-name details-item">Item: </span>
                    <span className="details-price details-item">Price:</span>
                    <span className="details-size details-item">Weight: </span>
                    <span className="details-quantity details-item">Quantity: </span>
                </div>
                <div className="details-data">
                    <span className="name details-item">
                        {itemName}
                    </span>
                    <span className="price details-item">
                        <div className="hebrew">ש"ח</div>
                        {itemPrice}
                    </span>
                    <span className="size details-item">
                        <div className="hebrew">גרם</div>
                        {itemSize}
                    </span>
                    <div className="quantity-container">
                    <span className="quantity-label">
                        <span className="hebrew">יח</span>
                        {itemQuantity}
                    </span>
                    <div className="quantity-select">
                    <MinusSignSVG className="plusminus minus" />
                    <PlusSignSVG className="plusminus plus" />
                    </div>
                </div>
                <img className="item-preview" alt="item" src={imageLink}/>
            </div>
        </div>
        
    </div>
    )
}

export default ItemDetails

// const ItemDetails = ({imageLink, itemName, itemPrice, itemQuantity,  itemSize}) => {
//     return(
//         <div className="details-container">
//             <div className="details-header">
//                 <span className="details-name">Item: 
//                     <span className="name">
//                         {itemName}
//                     </span>
//                 </span>
//             </div>
//             <div className="details-body">
//                 <span className="details-price">Price:
//                     <span className="price">
//                         {itemPrice}
//                     </span>
//                 </span>
//                 <br/>
//                 <br/>
//                 <span className="details-size">Weight: 
//                     <span className="size">
//                         {itemSize}
//                     </span>
//                 </span>
//             </div>
//             <div className="details-quantity">Quantity:
//                 <div className="quantity-select">
//                     <MinusSignSVG className="plusminus minus" />
//                         <span>{itemQuantity}</span>
//                     <PlusSignSVG className="plusminus plus" />
//                 </div>
//             </div>
//         </div>
//     )
// }