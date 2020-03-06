import React from 'react'
import moment from 'moment'
import API from '../../../api'
import history from '../../History'
import TripTile from '../TripTile'
import Item from '../Item'

//*Redirect user to home page
export const redirectHome = () => {
    history.push('/')
}

//*Render a trip tile for every trip the user has
export const renderTripTiles = (trips) => {
    if (!trips || !trips.length) return null

    return trips.map((trip) => {
        return <TripTile
            key={trip._id}
            trip={trip}
        />
    })
}

//*Format and display dates throughout the app
export const displayDate = (date) => {
    return moment(date).format('M/D/YYYY')
}

//*Fetch search suggestions for autocomplete component
export const fetchSearchSuggestions = async (query, setSuggestions) => {
    const response = await API.post('/item/lookup', {
        q: query
    })
    
    setSuggestions(response.data.slice(0, 5))
}

//*Handle user input change for search box
export const handleSearchInput = (e, setSuggestions, setUserInput) => {
    const userInput = e.target.value

    setUserInput(userInput)

    if (userInput.length < 2) {
        setSuggestions([])
    } else {
        fetchSearchSuggestions(userInput, setSuggestions)
    }
}

//*Render search suggestions for autocomplete component 
export const renderSearchSuggestions = (suggestions, setSuggestions, setUserInput, setSelectedItem) => {
    if (!suggestions.length) return null
        return(
            <ul>
                {suggestions.map((suggestion, idx) => {
                    return(
                        <li 
                        key={idx} 
                        onClick={() => {
                            setUserInput(suggestion.name)
                            setSuggestions([])
                            setSelectedItem(suggestion)
                        }}>
                        {suggestion.name}
                    </li>
                    )
                })}
            </ul>
        )
}

//*Parse and render item size/weight
export const renderItemSize = (rawText) => {
    if (!rawText) return undefined 

    const splitText = rawText.split(' ')
    let num, label

    splitText.forEach((segment) => {
        const isNumber = segment.match(/\d+/g)
        if (isNumber != null) {
            num = segment
        } else {
            label = segment
        }
    })

    return(
        <span className="size details-item">
            <div className="hebrew">
                {label}
            </div>
                {num}
            </span>
    )
}

//*Render item list shown on trip page
export const renderItems = (items) => {
    if (!items || !items.length) return null

    return items.map(item => {
        return <Item 
            key={item._id} 
            item={item}
            />
    })
}

//*Calculate total price of trip in trip summary
export const calculateTotal= (trip) => {
    if (!trip || !trip.items.length) return 0
    return trip.items.reduce((acc, cv) => {
        return acc + (parseFloat(cv.price) * cv.quantity)
    }, 0)
}

//*Display long strings in confined spaces
export const displayLongString = (str) => {
    if (str.length > 13) {
        const modifiedStr = str.slice(0, 19)
        return '...' + modifiedStr
    }
    return str
}

//*Display price in correct format with correct value based on quantity
export const displayPrice = (price, quantity) => {
    const fixedPrice = (price * quantity).toFixed(2)

    return '₪ ' + fixedPrice
}

//*Render a filter message that reminds the user that a filter is in action
export const renderFilterMessage = () => {
    const message = 'NOTE: Filter is active'

    return <div className="filter-warning-box">{message}</div>
}

//*Redirect user to the trip they wish to view
export const redirectToTrip = (id) => {
    history.push('/trip/' + id)
}