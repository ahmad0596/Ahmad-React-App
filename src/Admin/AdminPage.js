import React, { Component } from "react";
import Title from "../Template/Title";
import Login from "./Login";
import  { Grid } from "semantic-ui-react";
 
class AdminPage extends Component {
  constructor(props) {
      super(props);
    }

  render(){
    return(
      <div>
        <Grid container centered>
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