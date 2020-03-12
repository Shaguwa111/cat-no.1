import React from 'react'
import { useSummary } from './hooks'
import TripDeleteButton from './TripDeleteButton'
import TripOrderButton from './TripOrderButton'

const TripSummary = ({ id }) => {
    const summary = useSummary(id)
    const labels = {
        vat: 'VAT: ',
        subTotal: 'Subtotal: ',
        total: 'Total: '
    }

    if (!summary || summary === {}) return null

    return(
        <div className="trip-summary">
        <div className="trip-numbers">
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
            </div>
            <div className="trip-savings">
                <TripDeleteButton tripId={id} />
                <TripOrderButton tripId={id}/>
            </div>
        </div>
    )
}

export default TripSummary