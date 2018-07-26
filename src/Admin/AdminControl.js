import React, { Component } from 'react';

import { Button, Header, Grid } from 'semantic-ui-react';

class AdminControl extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' content='Admin Control' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default AdminControl;