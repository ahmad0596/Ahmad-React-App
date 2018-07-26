import React, { Component } from "react";

import fire from '../fire';

import { Grid, Feed, Header } from "semantic-ui-react";

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews:[]
    };
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
        <Grid>
          <Grid.Column>
            <Header as='h1' content='Reviews' />
            <Feed>
              {
                this.state.allReviews.map( aRev =>
                  <Feed.Event>
                    <Feed.Label icon='pencil' />
                    <Feed.Content key={aRev.id} date={aRev.date} summary={aRev.review} />
                  </Feed.Event>
                )
              }
            </Feed>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default ReviewList;