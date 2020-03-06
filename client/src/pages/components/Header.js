import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useModal } from './hooks'
import { redirectToTrips } from './helpers'
import Modal from './Modal'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    const {toggle, isShowing} = useModal()
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const labels = {
        logo: 'TealDeal',
        home: 'Home',
        trends: 'Trends',
        trips: 'My Trips',
        lookup: 'Lookup',
    }

    return(
        <header>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                userAction="LOGIN_WARNING"
            />
            <Link className="logo-section" to="/">
                <ion-icon name="rocket-sharp" style={{ width: '60px', height: '60px' }}></ion-icon>
                <span className="logo-text">
                    {labels.logo}
                </span>
            </Link>

            <ul>
                <li><Link  to="/">
                    {labels.home}
                </Link></li>
                <li><Link  to="/trends">
                    {labels.trends}
                </Link></li>
                <li><span className="mytrips-nav" onClick={() => {
                            isSignedIn ? redirectToTrips() : toggle()
                }}>
                    {labels.trips}
                </span></li>
                <li><Link  to="/lookup">
                    {labels.lookup}
                </Link></li>
                <GoogleAuth/>
            </ul>
        </header>
    )
}

export default Header