import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import GoogleAuth from './GoogleAuth'

const handleModalHeaderRender = (userAction) => {
    switch (userAction) {
        case 'DELETE_TRIP':
            return(
                <React.Fragment>
                    <span className="modal-title">
                        Delete Trip
                    </span>
                </React.Fragment>
            )
        case 'CREATE_TRIP':
            return(
                <React.Fragment>
                    <span className="modal-title">
                        New Trip
                    </span>
                </React.Fragment>
            )
        case 'CHECKOUT': 
                return(
                    <div></div>
                )
        case 'LOGIN_WARNING':
                return(
                    <React.Fragment>
                        <span>
                            NOTE
                        </span>
                    </React.Fragment>
                )
        default:
            return null
    }
}

const handleModalBodyRender = (userAction, localState) => {
    switch (userAction) {
        case 'DELETE_TRIP':
            return(
                <React.Fragment>
                    <span className="modal-form-text">
                        Are you sure you want to delete this trip?
                    </span> 
                </React.Fragment>
            )
        case 'CREATE_TRIP':
            return(
                <React.Fragment>
                    <span className="modal-form-text">
                        Name your new trip
                    </span> 
                    <input value={localState.tripName} onChange={(e) => localState.setTripName(e.target.value)}
                        className="modal-form-input"
                        placeholder="A name related to the trip's purpose, e.g. Breakfast"
                    />
                </React.Fragment>
            )
        case 'CHECKOUT': 
                return(
                    <div></div>
                )
        case 'LOGIN_WARNING':
                return(
                    <React.Fragment>
                        <span className="modal-form-text">
                            Please sign in to view your trips
                        </span>
                    </React.Fragment>
                )
        default:
            return null
    }
}

const handleModalFooterRender = (userAction, hide, onSubmit, localState, dispatch, extraInfo) => {
    switch (userAction) {
        case 'DELETE_TRIP':
            return(
                <React.Fragment>
                    <button 
                    className="trip-button order" 
                    onClick={hide}
                    >
                        Cancel
                    </button>
                    <button className="trip-button delete" onClick={() => dispatch(onSubmit(extraInfo.id))}>
                        Continue
                    </button>
                </React.Fragment>
            )
        case 'CREATE_TRIP':
            return(
                <React.Fragment>
                    <button 
                    className="trip-button delete" 
                    onClick={hide}
                    >
                        Cancel
                    </button>
                    <button className="trip-button order" onClick={() => dispatch(onSubmit(localState.tripName))}>
                        Continue
                    </button>
                </React.Fragment>
            )
        case 'CHECKOUT': 
                return(
                    <div></div>
                )
        case 'LOGIN_WARNING':
            return(
                <React.Fragment>
                    <button 
                    className="trip-button delete" 
                    onClick={hide}
                    >
                        Cancel
                    </button>
                    <GoogleAuth version="pretty" action={hide}/>
                </React.Fragment>
            )
        default:
            return null
    }
}

const Modal = ({ isShowing, hide, userAction, onSubmit, localState, extraInfo }) => {
    const dispatch = useDispatch()

    if (isShowing) {
        return ReactDOM.createPortal(
            <React.Fragment>
                <div className="modal-overlay">
                    <div className="modal-wrapper" onClick={hide}>
                        <div className="modal" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                {handleModalHeaderRender(userAction)}
                            </div>
                            <div className="modal-body">
                                {handleModalBodyRender(userAction, localState)}
                            </div>
                            <div className="modal-footer">
                                {handleModalFooterRender(userAction, hide, onSubmit, localState, dispatch, extraInfo)}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>, document.body
        )
    } else {
        return null
    }
}

export default Modal