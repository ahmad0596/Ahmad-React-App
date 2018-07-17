import React, { Component } from 'react';
import MyTask from './MyTask';
import AddTask from './AddTask';
import { Header, Icon } from 'semantic-ui-react';

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
		<AddTask addTask={this.addTask}/>
		{this.renderTasks()}
      </div>
    );
  }
}
export default MyTaskList;