import React, { useState } from 'react'
import { renderLookupButton} from './helpers'

const LookupInput = ({ setResults, onSubmit }) => {
    const [inputValue, setInputValue] = useState('')
    const [selectedItem, setSelectedItem] = useState({})

    return(
        <div className="lookup-input">
            <input 
            placeholder="Enter item name e.g. במבה"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            { renderLookupButton(inputValue, onSubmit, setResults, setSelectedItem)}
        </div>
    )
}

export default LookupInput