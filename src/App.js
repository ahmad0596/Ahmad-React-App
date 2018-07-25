import React, { Component } from 'react';

import { BrowserRouter } from "react-router-dom";

import { Grid, Container } from 'semantic-ui-react';

import Header from "./Template/Header";
import Routes from "./Template/Routes";
import Footer from "./Template/Footer";



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Grid Container>
            <Grid.Row>
              <Grid.Column>
                 <Header />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Container>
                  <Routes />
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Footer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
