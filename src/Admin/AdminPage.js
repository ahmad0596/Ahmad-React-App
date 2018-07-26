import React, { Component } from "react";

import  { Grid } from "semantic-ui-react";

import Title from "../Template/Title";
import Login from "./Login";

 
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Title name="Admin" desc="Manage your site"/> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Login />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default AdminPage;