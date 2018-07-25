import React, { Component } from 'react';

import fire from '../fire';

import { Grid, Form } from 'semantic-ui-react';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review:'',
      date:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  handleChange(e, { value, name }) {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var newDate = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() +", " + d.getFullYear()
    
    this.setState({
      [name]: value,
      date: newDate
    });
  }
  
  addMessage(e){
    e.preventDefault();
    const reviewRef = fire.database().ref('reviews');

    const item = {
      review: this.state.review,
      date: this.state.date
    }

    reviewRef.push(item);

    this.setState({
      review: '',
      date:''
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column>
            <Form onSubmit={this.addMessage}>
              <Form.Group>
                <Form.Input name="review" type="text" value={this.state.review} placeholder='Enter a Review' onChange={this.handleChange}/>
                <Form.Button content='Submit' />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default AddReview;
