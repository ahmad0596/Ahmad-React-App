import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Home from "../Home/HomePage";
import Activity from "../Activity/ActivityPage";
import Counter from "../Counter/CounterPage";
import Contact from "../Contact/ContactPage";
import About from "../Contact/About/AboutPage";
import Admin from "../Admin/AdminPage";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/activity" component={Activity}/>
          <Route exact path="/counter" component={Counter}/>
          <Route exact path="/contact" component={Contact}/>
            <Route exact path="/contact/about" component={About} />
          <Route exact path="/admin" component={Admin}/>
          <Route component={Home}/>
        </Switch>
      </div>
    )
  }
}
export default Routes;