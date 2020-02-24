import React from 'react'
import TryMeWindow from './components/TryMeWindow'
import Introduction from './components/Introduction'

const Home = () => {
    return(
            <div className="page">
                <TryMeWindow/>
                <Introduction/>
            </div>
    )
}

export default Home