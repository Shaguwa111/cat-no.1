import TYPES from '../types'

export default (state=[], action) => {
    switch (action.type) {
        case TYPES.FETCH_TRIPS:
            return [...action.payload]
        case TYPES.INCREMENT_QUANTITY:
            return [state.filter(trip => trip._id !== action.payload._id), action.payload]
        case TYPES.DECREMENT_QUANTITY:
            return [state.filter(trip => trip._id !== action.payload._id), action.payload]
        case TYPES.ADD_TO_TRIP:
            return [state.filter(trip => trip._id !== action.payload.id), action.payload]
        case TYPES.REMOVE_ITEM:
            return [state.filter(trip => trip._id !== action.payload.id), action.payload]
        case TYPES.DELETE_TRIP:
            return [...action.payload]
        default:
            return state
    }
}