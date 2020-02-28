import React, {useState, useEffect} from 'react'
import api from '../../api'

const makeQuery = async (e, query, setQuery, setSearchResults) => {
    setQuery(e.target.value)
    const req = await api.post('/item/lookup', {
        q: e.target.value
    })
    setSearchResults(req.data)
}

const handleResultClick = (setDisplay, setQuery, result, setSelected) => {
    setQuery(result)
    setSelected(true)
    setDisplay(false)

}

const renderSearchResults = (searchResults, display, setDisplay, setQuery, setSelected) => {
    console.log(display)
    if (!display) return null
    return searchResults.map((result, idx) => {
        return(
            <div key={idx} alt="" onClick={() => handleResultClick(setDisplay, setQuery, result, setSelected)}>
            <p className="searchResult">{result}</p>
            </div>
        )
    })
}

const onKeyDown = (e, setSelected) => {
 if (e.keyCode === 8) {
     console.log('backspaced this bitch')
    setSelected(false)
 }
}

const ItemSearch = () => {
    const [display, setDisplay] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (query.length > 1 && !selected) setDisplay(true)

    }, [query])

    return(
        <React.Fragment>
            <input 
            type="text" 
            placeholder="Enter item name e.g. במבה" 
            value={query} 
            onKeyDown={(e) =>onKeyDown(e, setSelected)}
            onChange={(e) => makeQuery(e, query, setQuery, setSearchResults)}/>
        <div className="search-results">
            {renderSearchResults(searchResults, display, setDisplay, setQuery, setSelected)}
        </div>
        </React.Fragment>
    )
}

export default ItemSearch