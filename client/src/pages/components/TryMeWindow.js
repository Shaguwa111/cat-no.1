import React, {useState} from 'react'
import GetStarted from './GetStarted'
import ItemSearch from './ItemSearch'

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

const TryMeWindow = () => {
    const [alertSeen, setAlertSeen] = useState(false)

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
                                    <ItemSearch/>  
                                        {renderAlert(alertSeen, setAlertSeen)}

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