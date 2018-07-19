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
        <Grid container textAlign='center' verticalAlign='middle' celled>
          <Grid.Row>
            <Grid.Column>
              <Label attached="top" color={this.state.statusColor}>{this.state.status}</Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
              <Grid.Column>
                <Button className="deleteButton" color='red' circular icon='delete' onClick={this.removeTask}></Button>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3'>
                  {this.props.task}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Button compact onClick={this.complete}>Done</Button>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MyTask;

