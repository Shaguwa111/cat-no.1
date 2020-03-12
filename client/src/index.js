import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'



//* Local imports
import App from './pages/components/App'
import reducers from './state/reducers'

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
)
window.screen.orientation.lock('portrait')


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
            document.querySelector('#root')
)