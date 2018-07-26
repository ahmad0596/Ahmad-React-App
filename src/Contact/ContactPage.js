import React, { Component } from "react";

import { Link } from "react-router-dom";

import  { Grid } from "semantic-ui-react";

import Title from "../Template/Title";
import AddReview from "./AddReview";
import ReviewList from "./ReviewList";
 
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
              <Title name="Contact" desc="Contact Us"/> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <AddReview />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ReviewList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link to="/contact/about">Click here for About</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactPage;