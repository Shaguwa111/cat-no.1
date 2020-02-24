import React from 'react'
import { ReactComponent as FlagSVG } from '../../resources/flag.svg'
import { ReactComponent as GithubSVG } from '../../resources/github.svg'
import { ReactComponent as ContactSVG } from '../../resources/envelope.svg'

const textCopyright = '2020 - Galor Sheinbein'
const textContact = 'Contact'
const textGithub = 'Github'
const symbolCopyright = '©'

const Footer = () => {
    return(
        <footer>
            <div className="footer-item-container">
                <div className="footer-copyright-section">
                <span className="copyright">
                    {symbolCopyright}
                </span>
                <p className="footer-item">
                    {textCopyright}
                </p>
            </div>
            </div>

            <div className="footer-item-container">
            <div className="footer-icon-section">
            <ContactSVG className="footer-svg"/>
                <p className="footer-item">
                    {textContact}
                </p>
                </div>
            </div>
            <div className="footer-item-container">
                <div className="footer-icon-section">
                <GithubSVG className="footer-svg"/> 
                <p className="footer-item">
                    {textGithub}
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