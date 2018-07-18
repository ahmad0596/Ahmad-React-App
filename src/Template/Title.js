import React from "react";
import { Header, Grid } from "semantic-ui-react";

function Title(props){
	return (
		<div>
			<Grid container>
	      		<Grid.Row>
	      			<Grid.Column textAlign='center'>
						<Header as='h1'>
							<Header.Content>
			      				{props.name} Page
			      				<Header.Subheader>
			      					{props.desc}
			      				</Header.Subheader>
			    			</Header.Content>
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
export default Title;