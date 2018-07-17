import React, { Component } from "react";
import Title from "../Template/Title";
 
class ContactPage extends Component {
  constructor(props) {
      super(props);
      this.state = {};
    }

  render(){
    return(
      <div>
        <Title name="Contact" desc="Contact Us"/> 
        </div>
    );
  }
}
export default ContactPage;