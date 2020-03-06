import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTrips } from '../../../state/actions'
import { calculateTotal } from '../helpers'

//*Toggle modal on and off
export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)

    const toggle = () => {
        setIsShowing(!isShowing)
    }

    return {
        isShowing,
        toggle
    }
}

//*Fetch all trips created by user
export const useFetchTrips = () => {
    const dispatch = useDispatch()

    const trips = useSelector(state => state.trips)

    useEffect(() => {
        dispatch(fetchTrips())

    }, [dispatch])

    return trips
}

//*Fetch an individual trip created by user
export const useFetchTrip = (id) => {
    const dispatch = useDispatch()

    const trip = useSelector(state => state.trips.find(trip => trip._id === id))

    useEffect(() => {   
        dispatch(fetchTrips())

    }, [dispatch])

    return trip
}

//*Calculate and render a summary of trip cost by overally item value
export const useSummary = (id) => {
    const dispatch = useDispatch()
    
    const trip = useSelector(state => state.trips.find(trip => trip._id === id))

    useEffect(() => {
        dispatch(fetchTrips())
        
    }, [dispatch])
    
    const total = calculateTotal(trip).toFixed(2)
    const vat = (total * 0.17).toFixed(2)
    const subTotal = (total - vat).toFixed(2)

    return {
        total,
        vat,
        subTotal
    }
}