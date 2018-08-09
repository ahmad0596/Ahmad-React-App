import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './AboutPage'
import DetailedAboutPage from './aboutDetail/DetailedAboutPage'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/contact/about' component={AboutPage}/>
    <Route path='/contact/about/:number' component={DetailedAboutPage}/>
  </Switch>
)


export default Roster