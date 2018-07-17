import React, { Component } from 'react';
import { Button, Input, Grid } from 'semantic-ui-react';

class AddTask extends Component {
	constructor(props) {
	    super(props);
	    this.state = { newTask: '' };
	    this.handleUpdate = this.handleUpdate.bind(this);
	    this.addTask = this.addTask.bind(this);
  	}
	addTask() {
		this.props.addTask(this.state.newTask);
		this.setState({ newTask: '' });
	}
	handleUpdate(event) {
    	this.setState({ newTask: event.target.value });
	}
	render() {
    	return (
	      <div>
	      	<Grid>
	      		<Grid.Row>
	      			<Grid.Column textAlign='center'>
	      				<Input placeholder='Enter Task' onChange={this.handleUpdate} value={this.state.newTask}>
	      				<input />
	      				<Button onClick={this.addTask} >Add Task</Button>
	      				</Input>
	      			</Grid.Column>
	      		</Grid.Row>
	      	</Grid>
	      </div>
    	);
  	}
}

export default AddTask;