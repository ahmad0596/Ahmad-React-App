import React, { Component } from 'react';
import { Button, Input, Grid } from 'semantic-ui-react';

class AdminControl extends Component {
	constructor(props) {
	    super(props);
	    this.state = { };
  	}

	render() {
    	return (
	      <div>
	      	<Grid centered container>
	      		<Grid.Row>
	      			<Grid.Column>
	      				<p>Custom Admin Content</p>
	      			</Grid.Column>
	      		</Grid.Row>
	      	</Grid>
	      </div>
    	);
  	}
}

export default AdminControl;