import React, { useState } from 'react'
import { displayTrendsTutorial, renderTrend, renderTabs } from './components/helpers'

const Trends = () => {
    const [trends, setTrends] = useState([{ name: 'Cornflakes' }])
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
                            { !trends.length ? displayTrendsTutorial(trends.length) : renderTrend() }
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Trends