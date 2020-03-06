import React from 'react'
import { useDispatch } from 'react-redux'
import { useSummary } from './hooks'
import { useModal } from './hooks'
import { deleteTrip } from '../../state/actions'
import Modal from './Modal'

const TripSummary = ({ id }) => {
    const {isShowing, toggle} = useModal()
    const dispatch = useDispatch()
    const summary = useSummary(id)
    const labels = {
        vat: 'VAT: ',
        subTotal: 'Subtotal: ',
        total: 'Total: ',
        deleteButton: 'Delete trip',
        'orderButton': 'Place order'
    }

    if (!summary || summary === {}) return null

    return(
        <div className="trip-summary">
        
            <Modal
                isShowing={isShowing}
                hide={toggle}
                userAction="DELETE_TRIP"
                dispatch={dispatch}
                onSubmit={deleteTrip}
                extraInfo={{ id }}
            />

            <div className="trip-totals labels">
                <div className="total-vat">
                    {labels.vat}
                </div>
                <div className="trip-subtotal">
                    {labels.subTotal}
                </div>
                <div className="total">
                    {labels.total}
                </div>
            </div>
            <div className="trip-totals amounts">
                <div className="total-vat">
                    {`₪ ${summary.vat}`}
                </div>
                <div className="trip-subtotal">
                    {`₪ ${summary.subTotal}`}
                </div>
                <div className="total">
                    {`₪ ${summary.total}`}
                </div>
            </div>
            <div className="trip-savings">
                <button className="trip-button delete" onClick={toggle}>
                    {labels.deleteButton}
                </button>
                <button className="trip-button order">
                    {labels.orderButton}
                </button>
            </div>
        </div>
    )
}

export default TripSummary