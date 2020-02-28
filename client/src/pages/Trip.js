//? The unique page of every individual trip created, with the options to add items, remove items, delete list and go back to My Trips
import React from 'react'
import {Link} from 'react-router-dom'
import AutoCompleteSearch from './components/AutoCompleteSearch'
import ItemDetails from './components/ItemDetails'
import ItemList from './components/ItemList'
import TripSummary from './components/TripSummary'
import GetStarted from './components/GetStarted'
import {ReactComponent as ArrowSVG } from '../resources/arrow.svg'

const tripTitle = 'Breakfast'
const tripDate = '2/27/2020'

const itemDetails = {
    itemName: 'לחם שיפון אורגני גרין',
    itemPrice: '16.90',
    itemSize: '750',
    itemQuantity: 1,
    imageLink: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/TRT64_Z_P_7296073346296_1.png'
}
const itemDetails2 = {
    itemName: 'לחם שיפון אורגני גרין',
    itemPrice: '16.90',
    itemSize: '750',
    itemQuantity: 1,
    imageLink: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/TRT64_Z_P_7296073346296_1.png'
}

const tripItems = [itemDetails, itemDetails2]

const Trip = () => {
    return(
        <div className="page-background">
            <div className="page-container">
                <div className="page-header">
                    <h3 className="page-header-text">
                        {tripTitle}
                    </h3>
                    <div className="trip-date-bar"><span>{tripDate}</span><Link className="back-button"></Link></div>
                </div>
        <div className="mytrips-content">
            <div className="trip-lookup-section">
            <div className="item-search-section">
                <AutoCompleteSearch />
                
            </div>
            <div className="item-details-section">
                <ItemDetails {...itemDetails}/>
                <div className="details-section-button"><span className="button-text">Add to Trip</span></div>
            </div>
            </div>
            <div className="trip-itemlist-section">
                <ItemList tripItems={tripItems}/>
                <TripSummary tripItems={tripItems}/>
            </div>
            
        </div>
            </div>
        </div>
    )
}

export default Trip