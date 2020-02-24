import React from 'react'
import { ReactComponent as ArrowSVG } from '../../resources/arrow.svg'
import { Link } from 'react-router-dom'

const textGetStarted = 'Get Started'

const GetStarted = () => {
    return(
        <Link to="/mytrips" className="getstarted-button">
            <div>
                {textGetStarted}
            </div>
            <ArrowSVG className="getstarted-arrow"/>
        </Link>
    )
}

export default GetStarted