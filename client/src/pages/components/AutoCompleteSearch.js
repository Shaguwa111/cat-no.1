import React, { useState } from 'react'
import axios from 'axios'

//*HELPER FUNCTIONS
const fetchSearchSuggestions = async (query, setSuggestions) => {
    const response = await axios.post('http://localhost:8080/item/lookup', {
        q: query
    })
    setSuggestions(response.data.slice(0, 4))
}

const handleOnChange = (e, setSuggestions, setUserInput) => {
    const userInput = e.target.value
    setUserInput(userInput)
    if (userInput.length < 2) {
        setSuggestions([])
    } else {
        fetchSearchSuggestions(userInput, setSuggestions)
    }
}

const handleSelectSuggestion = (value, setSuggestions, setUserInput) => {
    setUserInput(value)
    setSuggestions([])
}

const renderSuggestions = (suggestions, setSuggestions, setUserInput) => {
    if (!suggestions.length) return null
        return(
            <ul>
                {suggestions.map((suggestion, idx) => {
                    return(
                        <li 
                        key={idx} 
                        onClick={() => handleSelectSuggestion(suggestion, setSuggestions, setUserInput)}>
                        {suggestion}
                    </li>
                    )
                })}
            </ul>
        )
}
//*

const AutoComplete = () => {
    const [userInput, setUserInput] = useState([])
    const [suggestions, setSuggestions] = useState([])

    return(
        <div className="auto-complete">
            <input 
                type="text" 
                placeholder="Enter item name e.g. במבה"
                value={userInput} 
                onChange={(e) =>handleOnChange(e, setSuggestions, setUserInput) }/>
                {renderSuggestions(suggestions, setSuggestions, setUserInput)}
        </div>
    )
}

export default AutoComplete