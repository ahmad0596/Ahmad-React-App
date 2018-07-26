import React, { Component } from "react";

import  { Grid, Header } from "semantic-ui-react";

import Title from "../../Template/Title";
 
class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Title name="About" desc="Learn about Us"/> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" content="I am Ahmad Hammoudeh" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactPage;