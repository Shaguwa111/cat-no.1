import React, { useState } from 'react'
import AutoCompleteSearch from './components/AutoCompleteSearch'
import ItemDetailsSection from './components/ItemDetailsSection'
import ItemList from './components/ItemList'
import TripSummary from './components/TripSummary'
import { useParams } from 'react-router-dom'
import { useFetchTrip } from './components/hooks'
import { displayDate } from './components/helpers'

const Trip = () => {
    const { id } = useParams()
    const trip = useFetchTrip(id)
    const [selectedItem, setSelectedItem] = useState()

    if (!trip) return null
    
    return(
        <div className="page-background">
            <div className="page-container">
                <div className="page-header">
                    <h3 className="page-header-text">
                        {trip ? trip.name : null}
                    </h3>
                    <div className="trip-date-bar">
                        <span>
                            {trip? displayDate(trip.createdAt) : null}
                        </span>
                        </div>
                </div>
                <div className="mytrips-content">
                    <div className="trip-lookup-section">
                        <div className="item-search-section">

                            <AutoCompleteSearch setSelectedItem={setSelectedItem}/>

                        </div>

                    <ItemDetailsSection selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>

                    </div>
                    <div className="trip-itemlist-section">

                        <ItemList id={trip._id}/>
                        
                        <TripSummary id={trip._id}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip