import React, { Component } from 'react';

import { Header, Button, Grid, Label } from 'semantic-ui-react';

class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '(In Progress)', statusColor: 'red'
    };

    this.complete = this.complete.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  complete() {
    this.setState({
      status: '(Done)', statusColor: 'green'
    });
  }

  removeTask() {
    this.props.removeTask(this.props.task);
  }

  render() {
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" celled>
          <Grid.Row>
            <Grid.Column>
              <Label color={this.state.statusColor}>{this.state.status}</Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal'>
            <Grid.Column>
              <Button color='red' circular icon='delete' onClick={this.removeTask} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3'>
                <Header.Content>{this.props.task}</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Button compact content="Done" onClick={this.complete} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default MyTask;

