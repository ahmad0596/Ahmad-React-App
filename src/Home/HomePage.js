import React, { Component } from "react";

import { Grid } from "semantic-ui-react";

import Title from "../Template/Title";
 
class HomePage extends Component {
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
              <Title name="Home" desc="Welcome to our site"/>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </div>
    );
  }
} 
export default HomePage;