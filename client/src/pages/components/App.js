import React from 'react'
import { Router, Route } from 'react-router-dom'

//* Local imports
import history from '../History'
import Home from '../Home'
import Lookup from '../Lookup'
import MyTrips from '../MyTrips'
import Trends from '../Trends'
import Trip from '../Trip'
import Header from './Header'
import Footer from './Footer'


const App = () => {
    return(
        <Router history={history}>

            <Header/>
            <div className="page-wrapper">
                <div className="content">

                    <Route path="/" exact component={Home}/>
                    <Route path="/mytrips" exact component={MyTrips}/>
                    <Route path="/trips/:id" exact component={Trip}/>
                    <Route path="/lookup" exact component={Lookup}/>
                    <Route path="/trends" exact component={Trends}/>

                </div>
            <Footer/>
            </div>

        </Router>
    )
}

export default App