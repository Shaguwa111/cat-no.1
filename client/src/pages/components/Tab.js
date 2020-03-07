import React from 'react'

const Tab = ({ item, setSelectedTrend }) => {
    return(
        <div className="tab" onClick={() => setSelectedTrend(item)}>
            Item
        </div>
    )
}

export default Tab