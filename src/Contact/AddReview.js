import React, { Component } from 'react';
import fire from '../fire';
import { Grid, Form } from 'semantic-ui-react';

class AddReview extends Component {
	constructor(props) {
      super(props);
      this.state = {
      	myReview:''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, { value, name }) {
    	this.setState({
    		[name]: value
    	});
	}

	addMessage(e, name){
		e.preventDefault();
	    fire.database().ref('messages').push( this.state.myReview );
	    this.setState({ [name]: '' });
	}

	render() {
    	return (
	      <div>
	      	<Grid container>
	      		<Grid.Row>
	      			<Grid.Column textAlign='center'>
	      				<Form onSubmit={this.addMessage.bind(this)}>
						    <Form.Group>
								<Form.Input name="myReview" type="text" ref={ el => this.inputMsg = el } value={this.state.myReview} placeholder='Enter a Review' onChange={this.handleChange}/>
								<Form.Button content='Submit' />
							</Form.Group>
						</Form>
	      			</Grid.Column>
	      		</Grid.Row>
	      	</Grid>
	      </div>
    	);
  	}
}

export default AddReview;
