import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import Slider from "react-slick";

class ImageSlider extends Component {
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
        <Grid container>
          <Grid.Row>
            <Grid.Column>
                <Slider {...settings}>
                  <div>
                    <Image src='http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg' size='small' />
                  </div>
                  <div>
                    <Image src='http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg' size='small' />
                  </div>
                  <div>
                    <Image src='http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg' size='small' />
                  </div>
                  <div>
                    <Image src='http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg' size='small' />
                  </div>
                </Slider>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </div>
    );
  }
} 
export default ImageSlider;