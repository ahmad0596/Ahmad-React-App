import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Home from "../Home/HomePage";
import Activity from "../Activity/ActivityPage";
import Counter from "../Counter/CounterPage";
import Contact from "../Contact/ContactPage";
import Admin from "../Admin/AdminPage";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/activity" component={Activity}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/admin" component={Admin}/>
          <Route component={Home}/>
        </Switch>
      </div>
    )
  }
}
export default Routes;