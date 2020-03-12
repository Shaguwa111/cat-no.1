import React from 'react'
import { useDispatch } from 'react-redux'
import TrendChart from './TrendChart'
import { removeTracker } from '../../state/actions'

const TrendDataSection = ({item, setSelectedTrend}) => {
    const dispatch = useDispatch()


    if (!item) return null

    return(
        <React.Fragment>
            <div className="chart-header">
                <div className="chart-header-inner">
                <span className="trends-title">{`Price of "${item.name}" over the last 6 months`}</span>
                <button className="trends-button delete" onClick={() =>{
                    dispatch(removeTracker(item._id))
                    setSelectedTrend(null)
                 }}>Stop Tracking</button>
                </div>
            </div>
            <div className="chart-container">
                <TrendChart item={item}/>
            </div>
        </React.Fragment>
    )
}

export default TrendDataSection