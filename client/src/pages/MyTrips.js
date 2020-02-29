import React from 'react'
import { connect } from 'react-redux'
import { createNewTrip } from '../state/actions'

//*local imports
import { ReactComponent as PlusSignSVG } from '../resources/plus.svg' 
import Modal from './components/Modal'
import useModal from './components/hooks/useModal'

const textPageTitle = 'My Trips'
const textNewTrip = 'New Trip'

const MyTrips = (props) => {
    const {isShowing, toggle} = useModal()

    return(
        <React.Fragment>
            <Modal 
            isShowing={isShowing} 
            hide={toggle}
            modalTitle="New trip"
            userAction="CREATE_TRIP"
            onSubmit={props.createNewTrip}
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

export default connect(null, { createNewTrip })(MyTrips)