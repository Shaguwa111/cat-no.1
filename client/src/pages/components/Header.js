import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as RocketSVG } from '../../resources/rocket-sharp.svg'
import { useModal } from './hooks'
import { redirectToTrips } from './helpers'
import Modal from './Modal'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    const { toggle, isShowing } = useModal()
    const [menuToggle, setMenuToggle] = useState(false);
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const labels = {
        logo: 'TealDeal',
        home: 'Home',
        trends: 'Trends',
        trips: 'My Trips',
        lookup: 'Lookup',
    }

    const closeMenu = () => setMenuToggle(false);
    return (
        <header>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                userAction="LOGIN_WARNING"
            />
            <div className="menu">
            <Link className="logo-section" to="/"  onClick={closeMenu}>
                <RocketSVG style={{ width: '60px', height: '60px' }}/>
                <span className="logo-text">
                    {labels.logo}
                </span>
            </Link>
            <div className={"hamburger" + (menuToggle ? " open-hamburger" : "")} onClick={() => setMenuToggle(!menuToggle)}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            </div>
            <div className={"menu-dimmer" + (menuToggle ? " dim" : "")} onClick={closeMenu}> </div>
            <ul className={menuToggle ? "menu-open" : ""}>
                <li onClick={closeMenu}><Link to="/trends">
                    {labels.trends}
                </Link></li>
                <li onClick={closeMenu}><span className="mytrips-nav" onClick={() => {
                    isSignedIn ? redirectToTrips() : toggle()
                }}>
                    {labels.trips}
                </span></li>
                <li onClick={closeMenu}><Link to="/lookup">
                    {labels.lookup}
                </Link></li>
                <GoogleAuth />
            </ul>
        </header>
    )
}

export default Header