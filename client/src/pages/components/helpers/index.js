import React from 'react'
import moment from 'moment'
import API from '../../../api'
import history from '../../History'
import TripTile from '../TripTile'
import ItemTile from '../ItemTile'
import TrendChart from '../TrendChart'
import Item from '../Item'
import { ReactComponent as ClearQuerySVG } from '../../../resources/clear.svg'
import LookupDetails from '../LookupDetails'
import Tab from '../Tab'

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
        const modifiedStr = str.slice(0, 18)
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

//*Redirect user to the My Trips page 
export const redirectToTrips = () => {
    history.push('/mytrips')
}

//*Fetch search results from api for Lookup page
export const fetchLookupResults = async (query, setResults) => {
    if (query.length > 1) {
        const response = await API.post('/item/lookup', {
            q: query
        })

        setResults(response.data)
    }
}

//*Handle lookup search input
export const handleLookupSubmit = (e, query, setResults) => {
    if (e.key === 'Enter' && query) {
        fetchLookupResults(query, setResults)
    }
}

//*Render search results from the Lookup page
export const renderLookupResults = (results, setSelectedItem) => {
    if (!results || !results.length) return null
    return results.map((result) => {
        return <ItemTile item={result} setSelectedItem={setSelectedItem}/>
    })
}

//*Render Lookup search button depending on input
export const renderClearQuery = (query, setInputValue) => {
    if (query) {
        return(
            <ClearQuerySVG className="clear-query" onClick={() => setInputValue('')}/>
        )
    }
    return null
}

export const displaySearchHelper = () => {
    return <div className="search-helper">Enter a query and press enter to search. Click on an item for more information.</div>
}

//*Render item and its information after being clicked on
export const renderSelectedItem = (item) => {
    return(
        <LookupDetails selectedItem={item}/>
    )
}

export const displayTrendsTutorial = (length) => {
    console.log(length)
    if (length) {
        return <div className="trend-tutorial">Click on an item from the left side menu to display a trend!</div>
    }
    return <div className="trend-tutorial">You are not tracking any items. Sign in and lookup an item to get started!</div>
}

export const renderTrend = () => {
    return(
        <div className="chart-container">
            <TrendChart/>
        </div>
    )
}

export const renderTabs = (items) => {
    if (!items) return null

    return items.map((item) => {
        return(
            <Tab item={item}/>
        )
    })
}
