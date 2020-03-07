import React, { useState, useEffect } from 'react'
import { renderLookupResults, handleLookupSubmit, renderSelectedItem, displaySearchHelper } from './components/helpers'
import LookupInput from './components/LookupInput'
import { ReactComponent as ArrowSVG } from '../resources/arrow.svg'
import history from './History'
import { useModal } from './components/hooks' 
import LookupModal from './components/LookupModal'


const Lookup = () => {
    const [results, setResults] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)

    return(
        <div className="page-background">
            <LookupModal item={selectedItem} setSelectedItem={setSelectedItem}/>
            <div className="page-container">
                <div className="page-header">
                    <h3 className="page-header-text">Lookup</h3>
                </div>
                <div className="mytrips-content">
                    <div className="lookup-section">
                        <div className="lookup-search-section">
                            <LookupInput setResults={setResults} onSubmit={handleLookupSubmit} onActive={setSelectedItem}/>
                        </div>
                        { !results.length ? displaySearchHelper() : null}
                        <div className="lookup-results-grid">
                            
                            { renderLookupResults(results, setSelectedItem) }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lookup