import TYPES from "../types";

export default (state=[], action) => {
    switch (action.type) {
        case TYPES.FETCH_TRENDS:
            return action.payload
        case TYPES.TRACK_ITEM:
            return [...state, action.payload]
        case TYPES.REMOVE_TRACKER:
            return action.payload
        default:
            return state
    }
}