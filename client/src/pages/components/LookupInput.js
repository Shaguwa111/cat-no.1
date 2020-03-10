import React, { useState } from 'react'
import { renderClearQuery, handleLookupSubmit} from './helpers'

const LookupInput = ({ setResults, onActive }) => {
    const [inputValue, setInputValue] = useState('')

    return(
        <div className="lookup-input" onClick={() => {
            onActive(null)
            setResults([])
        }}>

        <span className="lookup-input-background">
            <input 
            placeholder="Enter item name e.g. במבה"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleLookupSubmit(e, inputValue, setResults)}
            />
                {renderClearQuery(inputValue, setInputValue)}
            </span>
        </div>
    )
}

export default LookupInput