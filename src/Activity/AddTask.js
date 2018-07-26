import React, { Component } from 'react';

import { Form, Input, Grid } from 'semantic-ui-react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };

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
            <Grid.Column>
              <Form onSubmit={this.addTask}>
                <Form.Group>
                  <Form.Input placeholder='Enter Task' onChange={this.handleUpdate} value={this.state.newTask}/>
                  <Form.Button content='Add Task' />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default AddTask;