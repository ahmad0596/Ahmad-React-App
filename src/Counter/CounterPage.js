import React, { Component } from "react";

import { Grid } from "semantic-ui-react";

import Title from "../Template/Title";
import CountByOne from "./CountByOne";

class CounterPage extends Component{
  constructor(props) {
    super(props);
  };

  render(){
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Title name="Counter" desc="Never lose count"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <CountByOne />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default CounterPage;