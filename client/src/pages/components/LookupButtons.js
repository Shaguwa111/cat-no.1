import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trackItem } from '../../state/actions'

const LookupButtons = ({ item, setSelectedItem }) => {
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const dispatch = useDispatch()

    if (isSignedIn) {
        return(
            <div className="lookup-result-button">
                <span className="lookup-button" onClick={() => setSelectedItem(null)}>Keep Searching</span>
                <span className="lookup-button" onClick={() => dispatch(trackItem(item))}>Track on Trends</span>
            </div>
        )
    } else {
        return(
            <div className="lookup-result-button">
                <span className="lookup-button" onClick={() => setSelectedItem(null)}>Keep Searching</span>
            </div>
        )
    }
}

export default LookupButtons