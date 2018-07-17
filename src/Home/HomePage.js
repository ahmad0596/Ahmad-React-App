import React, { Component } from "react";
import Title from "../Template/Title";
 
class HomePage extends Component {
  constructor(props) {
      super(props);
      this.state = {};
    }

  render(){
    return(
      <div>
        <Title name="Home" desc="Welcome to our site"/> 
        </div>
    );
  }
} 
export default HomePage;