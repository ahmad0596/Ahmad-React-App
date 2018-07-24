import React, { Component } from "react";
import fire from '../fire';
import { Grid, Feed } from "semantic-ui-react";

class ReviewList extends Component {
  constructor(props) {
      super(props);
      this.state = { allReviews:[]};
    }

  componentDidMount() {
    const reviewsRef = fire.database().ref('reviews').orderByKey().limitToLast(100);
    reviewsRef.on('value', (snapshot) => {
      let reviews = snapshot.val();
      let newState = [];
      for (let item in reviews) {
        newState.push({
          id: item,
          review: reviews[item].review,
          date: reviews[item].date
        });
      }
      this.setState({
        allReviews: newState
      });
    });
  }

  render(){
    return(
      <div>
	      <Grid container celled centered textAlign="center">
    			<Grid.Row>
    				<Grid.Column>
            <h1>Reviews</h1>
    					<Feed>
    						{
    					    this.state.allReviews.map( item =>
    								<Feed.Event>
    									<Feed.Label icon='pencil' />
    									<Feed.Content key={item.id} date={item.date} summary={item.review} />
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