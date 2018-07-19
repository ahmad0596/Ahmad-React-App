import React, { Component } from "react";
import fire from '../fire';
import { Grid, Feed } from "semantic-ui-react";

class ReviewList extends Component {
  constructor(props) {
      super(props);
      this.state = { messages:[]};
    }

  componentWillMount(){
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key  };
      this.setState({ messages: [message].concat(this.state.messages)});
    })
  }

  render(){
    return(
      <div>
	      <Grid container celled centered textAlign="center">
			<Grid.Row>
				<Grid.Column>
					<Feed>
						{
					    	this.state.messages.map( message =>
								<Feed.Event>
									<Feed.Label icon='pencil' />
									<Feed.Content key={message.id} date="date?" summary={message.text} />
								</Feed.Event>
							)
						}
					</Feed>
				</Grid.Column>
			</Grid.Row>
		  </Grid>
      </div>
    );
  }
}
export default ReviewList;