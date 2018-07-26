import React, { Component } from "react";

import { Grid } from "semantic-ui-react";

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
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Title name="Activity" desc="Keep track of your tasks"/> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <MyTaskList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ActivityPage;