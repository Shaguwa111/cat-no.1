import React from 'react'
import {ReactComponent as ListSVG} from '../../resources/list.svg'
import {ReactComponent as TrendSVG} from '../../resources/analytics.svg'
import {ReactComponent as BarcodeSVG} from '../../resources/barcode.svg'

const Introduction = () => {
    return(
        <div className="intro">
                <div className="intro-content">
                    <div className="intro-section-top">
                    </div>
                    <div className="intro-header">
                        <span className="intro-section-subtext">
                            My Trips
                        </span>
                    </div>
                    <div className="intro-section">
                    <ListSVG className="intro-icon"/> 
                    <p className="intro-section-text">
                        Create smart shopping lists that are guaranteed to always have the best prices
                    </p>
                    </div>
                    <div className="intro-header">
                        <span className="intro-section-subtext">
                            Trends
                        </span>
                    </div>
                    <div className="intro-section">
                    <TrendSVG className="intro-icon"/>
                    <p className="intro-section-text">
                        View market trends powered by machine learning and TensorFlowJS
                    </p>
                    </div>
                    <div className="intro-header">
                        <span className="intro-section-subtext">
                            Lookup
                        </span>
                    </div>
                    <div className="intro-section">
                    <BarcodeSVG className="intro-icon"/>
                    <p className="intro-section-text-last">
                        Search for individual items, find the lowest price and track it over time
                     </p>
                    </div>
                </div>
            
        </div>
    )
}

export default Introduction