import TYPES from '../types'
import API from '../../api'
import history from '../../pages/History'

export const signIn = (userId) => {
    return {
        type: TYPES.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: TYPES.SIGN_OUT
    }
}

export const fetchTrips = () => async dispatch => {
    const request = await API.get('/trip')

    dispatch({ type: TYPES.FETCH_TRIPS, payload: request.data})
}

export const createTrip = (name) => async dispatch => {
    const request = await API.post('/trip', {
        name
    })
    history.push(`/trip/${request.data._id}`)

    dispatch({ type: TYPES.CREATE_TRIP, payload: request.data})
}

export const addToTrip = (tripID, item) => async dispatch => {
    const request = await API.post(`/trip/${tripID}/item`, 
        item
    )

    dispatch({ type: TYPES.ADD_TO_TRIP, payload: request.data})
}

export const removeItem = (tripID, itemID) => async dispatch => {
    const request = await API.delete(`/trip/${tripID}/item/${itemID}`)

    dispatch({ type: TYPES.REMOVE_ITEM , payload: request.data })
}
export const incrementQuantity = (tripID, itemID) => async dispatch => {
    const request = await API.put(`/trip/${tripID}/item/${itemID}/plusone`)

    dispatch({ type: TYPES.INCREMENT_QUANTITY, payload: request.data})
}

export const decrementQuantity = (tripID, itemID) => async dispatch => {
    const request = await API.put(`/trip/${tripID}/item/${itemID}/minusone`)

    dispatch({ type: TYPES.DECREMENT_QUANTITY, payload: request.data})
}

export const deleteTrip = (tripID) => async dispatch => {
    const request = await API.delete(`/trip/${tripID}`)
    history.push('/mytrips')
    
    dispatch({ type: TYPES.DELETE_TRIP, payload: request.data})
}