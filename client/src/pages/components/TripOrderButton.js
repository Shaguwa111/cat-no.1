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
                userAction="CHECKOUT"
                dispatch={dispatch}
                onSubmit={deleteTrip}
                extraInfo={{ id }}
            />
            <button className="trip-button order" onClick={toggle}>
                Place order
            </button>
        </React.Fragment>
    )
}

export default TripDeleteButton