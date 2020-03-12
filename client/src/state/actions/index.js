import TYPES from '../types'
import API from '../../api'
import history from '../../pages/History'

export const signIn = (userId) => {
    history.push('/mytrips')

    return {
        type: TYPES.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    history.push('/')
    
    return {
        type: TYPES.SIGN_OUT
    }
}

export const fetchTrips = () => async dispatch => {
    const request = await API.get('/trip')
    console.log('w')
    dispatch({ type: TYPES.FETCH_TRIPS, payload: request.data})
}

export const createTrip = (name) => async dispatch => {
    const request = await API.post('/trip', {
        name
    })
    history.push(`/trips/${request.data._id}`)

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

export const fetchTrends = () => async dispatch => {
    const request = await API.get('/track')

    dispatch({ type: TYPES.FETCH_TRENDS, payload: request.data})
}
export const trackItem = (item) => async dispatch => {
    const request = await API.post('/track', item)
    const trackedItem = request.data.find(x => x.name === item.name)

    history.push('/trends')
    dispatch({ type: TYPES.TRACK_ITEM, payload: trackedItem})
}

export const removeTracker = (id) => async dispatch => {
    const request = await API.delete(`/track/${id}`)

    dispatch({ type: TYPES.REMOVE_TRACKER, payload: request.data })
}