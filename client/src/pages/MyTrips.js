import React, { useState } from 'react'
import { renderFilterMessage } from './components/helpers'
import { ReactComponent as PlusSignSVG } from '../resources/plus.svg' 
import Modal from './components/Modal'
import { renderTripTiles } from './components/helpers'
import { useFetchTrips, useModal } from './components/hooks'
import { createTrip } from '../state/actions'

const MyTrips = () => {
    const unfilteredTrips = useFetchTrips([])
    const [filter, setFilter]= useState('')
    const {isShowing, toggle} = useModal()
    const [tripName, setTripName] = useState('')
    const trips = unfilteredTrips.filter(trip => trip.name && trip.name.toLowerCase().includes(filter.toLowerCase()))
    const labels = {
        pageTitle: 'My Trips',
        newTripText: 'New Trip',
        modalTitle: 'New Trip'
    }

    return(
        <React.Fragment>

            <Modal 
            isShowing={isShowing} 
            hide={toggle}
            modalTitle={labels.modalTitle}
            userAction='CREATE_TRIP'
            onSubmit={createTrip}
            localState={{tripName, setTripName}}
            />

            <div className="page-background">
                <div className="page-container">
                    <div className="page-header">

                        <h3 className="page-header-text">
                            {labels.pageTitle}
                        </h3>

                            <input 
                                className="mytrips-search" 
                                placeholder="Search Trips"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />

                    </div>

                    <div className="mytrips-main-content">
                        <div className="mytrips-grid">
                            <div className="newtrip" onClick={toggle}>
                                <div>
                                    {labels.newTripText}
                                </div>
                                <PlusSignSVG className="newtrip-plus"/>
                            </div>

                                {renderTripTiles(trips ? trips : [])}
                                {filter ? renderFilterMessage() : null}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyTrips