import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { displayLongString, displayPrice } from './helpers'
import { incrementQuantity, decrementQuantity, removeItem } from '../../state/actions'
import { ReactComponent as PlusSignSVG } from '../../resources/plus-circle.svg'
import { ReactComponent as MinusSignSVG } from '../../resources/minus-circle.svg'

const Item = ({item}) => {
    const { id }= useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(item.quantity)
    const labels = { removeItem: window.innerWidth > 651 ? 'Remove' : 'X'}

    if (quantity < 1) {
        dispatch(removeItem(id, item._id))
    }

    return (
        <li className="trip-item">
            <div className="list-details">
                <span className="list-name">
                    {displayLongString(item.name)}
                </span>
                <span className="list-size">
                    {displayLongString(item.size)}
                </span>
                <span className="list-price">
                    {displayPrice(item.price, item.quantity, 0)}
                </span>
                <span className="quantity-select">
                <MinusSignSVG className="plusminus minus" onClick={() => {
                    setQuantity(quantity - 1)
                    dispatch(decrementQuantity(id, item._id))
                }}/>
                    {quantity}
                    <PlusSignSVG className="plusminus plus" onClick={() => {
                        setQuantity(quantity + 1)
                        dispatch(incrementQuantity(id, item._id))
                    }}/>
                </span>
            </div>
            <div className="list-remove-button" onClick={() => dispatch(removeItem(id, item._id))}>
                {labels.removeItem}
            </div>
        </li>
    )
}

export default Item