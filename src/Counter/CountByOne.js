import React, { Component } from "react";
import { Button, Grid, Progress, Input } from "semantic-ui-react";

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
      this.updateMax = this.updateMax.bind(this);
    }

    inc(){
    	this.setState({
    		count: this.state.count >= this.state.max ? 0 : this.state.count + 1
    	});
    }
    dec(){
    	this.setState({
    		count: this.state.count - 1
    	})
    }
    reset(){
    	this.setState({
    		count: 0
    	})
    }
    updateMax(event){
      this.setState({
        max: parseInt(event.target.value)
      })
    }

    render(){
    	return(
    		<div>
    			<Grid container textAlign='center' celled>
            {/*
            <Grid.Row>
              <Grid.Column>
                <Input placeholder='Count up to...?' onChange={this.handleUpdate}>
                <input />
                <Button compact onClick={this.updateMax} >New Max</Button>
                </Input>
              </Grid.Column>
            </Grid.Row>
            */}
      			<Grid.Row>
      				<Grid.Column>
                <Progress size='large' indicating progress='value' value={this.state.count} total={this.state.max} />
  						</Grid.Column>
  					</Grid.Row>
  					<Grid.Row columns={3}>
            <Grid.Column>
              <Button compact onClick={this.reset}>Reset</Button>
            </Grid.Column>
            <Grid.Column>
              <Button compact onClick={this.dec}>-1</Button>
            </Grid.Column>
            <Grid.Column>
              <Button compact onClick={this.inc}>+1</Button>
            </Grid.Column>
          </Grid.Row>
				</Grid>
    		</div>
    	)
    }
}
export default countByOne;