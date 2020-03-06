import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../state/actions'
import api from '../../api';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '562479785749-sp2t4oc2dkaq2bd06lph8q3h5n6ms283.apps.googleusercontent.com',
                scope: 'email',
                fetch_basic_profile: true
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
            api.userId = ''+this.auth.currentUser.get().getId();
        } else {
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return(
                <button onClick={this.onSignOutClick} className="sign-out">
                    Sign Out
                </button>
            )
        }
        else {
            return(
                <button onClick={this.onSignInClick}>
                    Sign In
                </button>
            )
        }
    }
    render() {
        return(
            <React.Fragment>{this.renderAuthButton()}</React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)