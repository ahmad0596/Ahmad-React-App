import React from "react";

import { Header, Grid } from "semantic-ui-react";

function Title(props){
  return (
    <div>
      <Grid>
        <Grid.Column textAlign='center'>
          <Header as='h1'>
            <Header.Content>
              {props.name}
              <Header.Subheader>
                {props.desc}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
}
export default Title;