import React, {useState} from 'react'
import GetStarted from './GetStarted'
import api from '../../api'

const textWindowTitle = '// TRY ME!'
const textAlert = 'NOTE: Only hebrew text is supported!'

const renderAlert = (status, setStatus) => {
    if (status) {
        return null
    }
    return(
        <div className="alert">
            <span className="closebtn" onClick={() => setStatus(true)}>
                &times;
            </span>
            {textAlert}
        </div>
    )
}

const makeQuery = async (e, query, setQuery) => {
    setQuery(e.target.value)
    const req = await api.post(query)
    console.log(req)
}

const TryMeWindow = () => {
    const [alertSeen, setAlertSeen] = useState(false)
    const [query, setQuery] = useState(null)

    return(
        <div className="try-me">
                    <div className="window">
                        <div className="top">
                            <span className="dot red"/>
                            <span className="dot yellow"/>
                            <span className="dot green"/>
                            <span className="demo-window-title">
                                {textWindowTitle}
                            </span>
                        </div>
                        <div className="window-content">
                                <div className="demo-container">   
                                    <input type="text" placeholder="Enter item name e.g. במבה" onChange={(e) => makeQuery(e, query, setQuery)}/>
                                        {renderAlert(alertSeen, setAlertSeen)}
                                    <div className="search-results"></div>
                                </div>
                        </div>
                    </div>
                        <div className="or">
                            <br/>
                        </div>
                        <GetStarted/>
                </div>
    )
}

export default TryMeWindow