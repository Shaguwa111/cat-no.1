import React from 'react'
import { Link } from 'react-router-dom'

const textLogo = 'TealDeal'
const textHome = 'Home'
const textTrends = 'Trends'
const textTrips = 'My Trips'
const textLookup = 'Lookup'
const textLogin = 'Log In'

const Header = () => {
    return(
        <header>
        <Link className="logo-section" to="/">
            <ion-icon name="rocket-sharp" style={{ width: '60px', height: '60px' }}></ion-icon>
            <span className="logo-text">
                {textLogo}
            </span>
            </Link>

            <ul>
                <li><Link  to="/">
                    {textHome}
                </Link></li>
                <li><Link  to="/trends">
                    {textTrends}
                </Link></li>
                <li><Link  to="/mytrips">
                    {textTrips}
                </Link></li>
                <li><Link  to="/lookup">
                    {textLookup}
                </Link></li>
                <button>
                    {textLogin}
                </button>
            </ul>
        </header>
    )
}

export default Header