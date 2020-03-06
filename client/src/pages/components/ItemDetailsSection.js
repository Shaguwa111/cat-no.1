import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToTrip } from '../../state/actions'
import ItemDetails from './ItemDetails'

const ItemDetailsSection = ({ selectedItem, setSelectedItem }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const buttonText = 'Add to trip'

    if (!selectedItem) return null

    return(
        <div className="item-details-section">

            <ItemDetails tripId={id} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>

        <div className="details-section-button" onClick={() => {
            dispatch(addToTrip(id, selectedItem))
            setSelectedItem(null)
        }}>
            <span className="button-text">
                {buttonText}
            </span>
        </div>
    </div>
    )
}

export default ItemDetailsSection