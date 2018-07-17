import React, { Component } from 'react';
import { Header, Button, Grid, Label } from 'semantic-ui-react';

class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = { status: '(In Progress)', statusColor: 'red' };
    this.complete = this.complete.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  complete() {
    this.setState({ status: '(Done)', statusColor: 'green' });
  }
  removeTask() {
    this.props.removeTask(this.props.task);
  }
  render() {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button className="deleteButton" color='red' circular icon='delete' onClick={this.removeTask}></Button>
            </Grid.Column>
            <Grid.Column>
            <Label color={this.state.statusColor} attached='top'>{this.state.status}</Label>
              <Header as='h3'>
                {this.props.task}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Button className="completeButton" onClick={this.complete}>Complete!</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MyTask;

