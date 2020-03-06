import React from 'react'
import { useDispatch } from 'react-redux'
import { useModal } from './hooks'
import { displayDate, redirectToTrip } from './helpers'
import { deleteTrip } from '../../state/actions'
import { ReactComponent as DeleteTripSVG } from '../../resources/close-circle.svg'
import Modal from './Modal'

const TripTile = ({ trip }) => {
    const {toggle, isShowing} = useModal()
    const dispatch = useDispatch()
    return(
        <React.Fragment>
        <Modal
                isShowing={isShowing}
                hide={toggle}
                userAction="DELETE_TRIP"
                dispatch={dispatch}
                onSubmit={deleteTrip}
                extraInfo={{ id: trip._id}}
            />
        <div className="trip-tile" onClick={() => redirectToTrip(trip._id)}>

        

            <div className="trip-tile-header" onClick={toggle}>
                <span>
                    {displayDate(trip.createdAt)}
                </span>
                <DeleteTripSVG className="trip-tile-delete-svg" style={{fill: 'red !important'}} onClick={(e) => {
                    e.stopPropagation()
                    toggle()
                }}/>
            </div>
            <div className="trip-tile-body">
                <span className="trip-tile-title">{trip.name}</span>
            </div>
            <div className="trip-tile-footer">
                <span>Items: <span className="item-count">{trip.items.length}</span></span>
            </div>
        </div>
        </React.Fragment>
    )
}

export default TripTile