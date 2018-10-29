import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ScreenShot from './Pages/ScreenShot/ScreenShot'

export default class AppRoutes extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={ScreenShot} />
        </Switch>
      </Router>
    )
  }
}
