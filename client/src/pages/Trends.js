import React, { useState } from 'react'
import { displayTrendsTutorial,renderTabs } from './components/helpers'
import { useFetchTrends } from './components/hooks'
import TrendDataSection from './components/TrendDataSection'

const Trends = () => {
    const trends = useFetchTrends()
    const [selectedTrend, setSelectedTrend ]= useState(null)

    return(
        <div className="page-background">
            <div className="page-container">
                <div className="page-header">
                    <h3 className="page-header-text">Trends</h3>
                </div>

                <div className="mytrips-content">
                    <div className="trend-tab">
                        <div className="tab-container">
                            { renderTabs(trends, setSelectedTrend) }
                        </div>
                        <div className="trend-separator"></div>
                        <div className="trend-data">
                            {!selectedTrend ? displayTrendsTutorial(trends) : null}
                            <TrendDataSection item={selectedTrend} setSelectedTrend={setSelectedTrend}/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Trends