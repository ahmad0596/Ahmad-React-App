import React, { Component } from "react";

import { Form, Button, Grid, Progress } from "semantic-ui-react";

class countByOne extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      max: 10
    };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.reset = this.reset.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  inc() {
    this.setState({
      count: this.state.count >= this.state.max ? this.state.max : this.state.count + 1
    });
  }

  dec() {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  handleUpdate(event) {
    this.setState({
      max: parseInt(event.target.value),
      count: 0
    })
  }

  render(){
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Progress size='large' indicating progress='value' value={this.state.count} total={this.state.max} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Form onSubmit={this.updateMax}>
                <Form.Group>
                  <Form.Input type="number" placeholder='Enter Max (Default: 10)' onChange={this.handleUpdate}/>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Button content='Reset' onClick={this.reset} />
            </Grid.Column>
            <Grid.Column>
              <Button content='-1' onClick={this.dec} />
            </Grid.Column>
            <Grid.Column>
            <Button content='+1' onClick={this.inc} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default countByOne;