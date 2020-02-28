//? The page with a list of all of the Trips the user has created thus far
//? User can open and view trips, create a new trip
import React from 'react'
import { ReactComponent as PlusSignSVG } from '../resources/plus.svg' 
import Modal from './components/Modal'
import useModal from './components/hooks/useModal'

const textPageTitle = 'My Trips'
const textNewTrip = 'New Trip'

const MyTrips = () => {
    const {isShowing, toggle} = useModal()

    return(
        <React.Fragment>
            <Modal 
            isShowing={isShowing} 
            hide={toggle}
            modalTitle="New trip"
            userAction="CREATE_TRIP"
            />
            <div className="page-background">
                <div className="page-container">
                    <div className="page-header">
                        <h3 className="page-header-text">
                            {textPageTitle}
                        </h3>
                            <p className="header-subtext"></p>

                            <input className="mytrips-search" placeholder="Search Trips"/>

                    </div>
                    <div className="mytrips-main-content">
                    <div className="mytrips-grid">
                <div className="newtrip" onClick={toggle}>
                    <div>
                        {textNewTrip}
                    </div>
                    <PlusSignSVG className="newtrip-plus"/>
                </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyTrips