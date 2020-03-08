import React from 'react'
import { useModal } from './hooks'
import Modal from './Modal'
import { deleteTrip} from '../../state/actions'
import { useDispatch } from 'react-redux'

const TripDeleteButton = ({tripId: id}) => {
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
                extraInfo={{ id }}
            />
            <button className="trip-button delete" onClick={toggle}>
                Delete trip
            </button>
        </React.Fragment>
    )
}

export default TripDeleteButton