import React, { Component } from "react";
import Title from "../Template/Title";

class CounterPage extends Component{
	constructor(props) {
      super(props);
      this.state = {};
    }

	render(){
		return(
			<div>
				<Title name="Counter" desc="Never lose count"/> 
		    </div>
		);
	}
}
export default CounterPage;