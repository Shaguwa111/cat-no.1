import React from 'react'
import { ReactComponent as BarcodeSVG } from '../../resources/barcode.svg'

const IntroPanel = () => {
    return(
        <div className="page">
                <div className="intro">
                    <p className="intro-text">
                    Check grocery prices across all major stores in Israel to make sure you <span className="intro-subtext">ALWAYS</span> get the best deal!
                    </p> 
                    <BarcodeSVG className="barcode-svg"/>
                    <p className="intro-subtext">
                    
                    </p>
                </div>
            </div>
    )
}

export default IntroPanel