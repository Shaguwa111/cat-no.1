import React from 'react'

const Tab = ({ item, setSelectedTrend }) => {
    return(
        <div key={item._id} className="tab" onClick={() => setSelectedTrend(item)}>
            {item.name}
        </div>
    )
}

export default Tab