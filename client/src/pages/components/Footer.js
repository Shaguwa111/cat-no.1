import React from 'react'
import { useModal } from './hooks'
import Modal from './Modal'
import { ReactComponent as FlagSVG } from '../../resources/flag.svg'
import { ReactComponent as GithubSVG } from '../../resources/github.svg'
import { ReactComponent as ContactSVG } from '../../resources/envelope.svg'

const Footer = () => {
    const {toggle, isShowing} = useModal()
    const labels = {
        copyright: '2020 - Galor Sheinbein',
        contact: 'Contact',
        github: 'Github',
        copyrightSymbol: '©'
    }

    return(
        <footer>
            <Modal
                hide={toggle}
                isShowing={isShowing}
                userAction="CONTACT"
            />
            <div className="footer-item-container">
                <div className="footer-copyright-section">
                <span className="copyright">
                    {labels.copyrightSymbol}
                </span>
                <p className="footer-item">
                    {labels.copyright}
                </p>
            </div>
            </div>

            <div className="footer-item-container">
            <div className="footer-icon-section">
            <ContactSVG className="footer-svg" onClick={toggle}/>
                <p className="footer-item">
                    {labels.contact}
                </p>
                </div>
            </div>
            <div className="footer-item-container">
                <div className="footer-icon-section">
                <a href="https://github.com/nxzya"><GithubSVG className="footer-svg"/> 
                <p className="footer-item">
                    {labels.github}
                </p>
                </a>
                </div>
            </div>
            <div className="footer-item-container">
                <FlagSVG className="footer-item flag" />
            </div>
        </footer>
    )
}

export default Footer