import React, { useState } from 'react'
import { renderSearchSuggestions, handleSearchInput, renderClearSearch } from './helpers'

const AutoComplete = ({ setSelectedItem }) => {
    const [userInput, setUserInput] = useState('')
    const [suggestions, setSuggestions] = useState([])

    return(
        <div className="auto-complete">
            <input 
                type="text" 
                placeholder="Enter item name e.g. במבה"
                value={userInput} 
                onChange={(e) => handleSearchInput(e, setSuggestions, setUserInput)}
            />
            {renderClearSearch(userInput, setUserInput, setSuggestions)}
            {renderSearchSuggestions(suggestions, setSuggestions, setUserInput, setSelectedItem)}

        </div>
    )
}

export default AutoComplete