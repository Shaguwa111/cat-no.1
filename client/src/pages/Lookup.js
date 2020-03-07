import React, { useState } from 'react'
import { renderLookupResults, handleLookupSubmit, renderSelectedItem } from './components/helpers'
import LookupInput from './components/LookupInput'
import { ReactComponent as ArrowSVG } from '../resources/arrow.svg'

const Lookup = () => {
    const [results, setResults] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)

    return(
        <div className="page-background">
            <div className="page-container">
                <div className="page-header">
                    <h3 className="page-header-text">Lookup</h3>
                    <span className="previous-page-button">
                            <h3>Back</h3>
                        <ArrowSVG className="arrow-svg"/>
                    </span>
                </div>
                <div className="mytrips-content">
                    <div className="lookup-section">
                        <div className="lookup-search-section">
                            <LookupInput setResults={setResults} onSubmit={handleLookupSubmit}/>
                        </div>
                        <div className="lookup-results-grid">
                    
                            { selectedItem ? renderSelectedItem(selectedItem) : renderLookupResults(results) }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lookup