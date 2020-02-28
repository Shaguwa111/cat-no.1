import React, { useState, useEffect, selected } from 'react'
import useModal from './hooks/useModal'
import Modal from './Modal'

const calculateSubTotal = (list) => {
    if (!list) return 0
    return list.reduce((acc, cv) => {
        return acc + parseFloat(cv.itemPrice)
    }, 0)
}

const calculateVAT = (subtotal) => {
    console.log(subtotal)
    return subtotal * 0.17
}

const calculateTotal = (subtotal, vat) => {
    return subtotal + vat
}

const TripSummary = ({tripItems}) => {
    const {isShowing, toggle} = useModal()
    const [items] = useState(tripItems)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(calculateSubTotal(items))
    }, [])
    
    return(
        <div className="trip-summary">
            <Modal
                isShowing={isShowing}
                hide={toggle}
                userAction="DELETE_TRIP"
            />
            <div className="trip-totals labels">
                <div className="total-vat">VAT: </div>
                <div className="trip-subtotal">Subtotal: </div>
                <div className="total">Total: </div>
            </div>
            <div className="trip-totals amounts">
                <div className="total-vat">{`₪ ${calculateVAT(subTotal).toFixed(2)}`}</div>
                <div className="trip-subtotal">{`₪ ${subTotal.toFixed(2)}`}</div>
                <div className="total">{`₪ ${calculateTotal(subTotal, calculateVAT(subTotal)).toFixed(2)}`}</div>
            </div>
            <div className="trip-savings">
                <button className="trip-button delete" onClick={toggle}>Delete trip</button>
                <button className="trip-button order">Place order</button>
            </div>
        </div>
    )
}

export default TripSummary