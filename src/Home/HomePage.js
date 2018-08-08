import React, { Component } from "react";

import { Grid } from "semantic-ui-react";

import Title from "../Template/Title";
import ImageSlider from "./imageSlider/ImageSlider";
 
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Title name="Home" desc="Welcome to our site"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ImageSlider />
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </div>
    );
  }
} 
export default HomePage;