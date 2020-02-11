import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Page from './Pages/SamplePage/Page'
import LandingPage from './Pages/LandingPage'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'

export default class AppRoutes extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Page} />
        </Switch>
      </Router>
    )
  }
}
