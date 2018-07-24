import React, { Component } from 'react';
import MyTask from './MyTask';
import AddTask from './AddTask';
import { Grid } from "semantic-ui-react";

class MyTaskList extends Component {
	constructor(props) {
	  super(props);
	  this.addTask = this.addTask.bind(this);
	  this.removeTask = this.removeTask.bind(this);
	  this.state = { tasks: ['Gym', 'Shopping', 'Class'] };
	}
	renderTasks() {
	  return this.state.tasks.map(task => (
	    <MyTask key={task} task={task} removeTask={this.removeTask}/>
	  ));
	}
	addTask(newTask) {
	  this.setState({ tasks: [...this.state.tasks, newTask] });
	}
	removeTask(deleteTask) {
	  const filteredTasks = this.state.tasks.filter(task => {
	    return task !== deleteTask;
	  });
	  this.setState({ tasks: filteredTasks });
	}
  render() {
    return (
      <div>
      	<Grid centered>
      		<Grid.Row>
      			<Grid.Column>
					<AddTask addTask={this.addTask}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
      			<Grid.Column>
					{this.renderTasks()}
				</Grid.Column>
			</Grid.Row>
		</Grid>
      </div>
    );
  }
}
export default MyTaskList;