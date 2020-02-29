import TYPES from '../types'
import API from '../../api'

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

export const createNewTrip = (name) => async dispatch => {
    const request = await API.post('/trip', {
        name
    })
    console.log(request)
    dispatch({ type: TYPES.CREATE_TRIP, payload: request.data})
}