import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tripsReducer from './tripsReducer'
import trendsReducer from './trendsReducer'

export default combineReducers({
    auth: authReducer,
    trips: tripsReducer,
    trends: trendsReducer
})