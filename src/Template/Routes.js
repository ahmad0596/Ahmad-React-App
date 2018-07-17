import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from "../Home/HomePage";
import Activity from "../Activity/ActivityPage";
import Counter from "../Counter/CounterPage";
import Contact from "../Contact/ContactPage";

class Routes extends Component {
  render() {
    return (
	    <div>
            <Route exact path="/" component={Home}/>
            <Route path="/activity" component={Activity}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/contact" component={Contact}/>
	    </div>
    )
  }
}

export default Routes;