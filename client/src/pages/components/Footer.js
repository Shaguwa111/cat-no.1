import React from 'react'
import { ReactComponent as FlagSVG } from '../../resources/flag.svg'
import { ReactComponent as GithubSVG } from '../../resources/github.svg'
import { ReactComponent as ContactSVG } from '../../resources/envelope.svg'

const Footer = () => {
    const labels = {
        copyright: '2020 - Galor Sheinbein',
        contact: 'Contact',
        github: 'Github',
        copyrightSymbol: '©'
    }

    return(
        <footer>
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
            <ContactSVG className="footer-svg"/>
                <p className="footer-item">
                    {labels.contact}
                </p>
                </div>
            </div>
            <div className="footer-item-container">
                <div className="footer-icon-section">
                <GithubSVG className="footer-svg"/> 
                <p className="footer-item">
                    {labels.github}
                </p>
                </div>
            </div>
            <div className="footer-item-container">
                <FlagSVG className="footer-item flag" />
            </div>
        </footer>
    )
}

export default Footer