import React, { Component } from "react";
import Title from "../Template/Title";
import MyTaskList from "./MyTaskList";
 
class ActivityPage extends Component {
  constructor(props) {
      super(props);
      this.state = {};
    }

  render(){
    return(
      <div>
        <Title name="Activity" desc="Keep track of your tasks"/> 
        <MyTaskList />
      </div>
    );
  }
}
export default ActivityPage;