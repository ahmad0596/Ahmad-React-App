import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Grid, Container } from 'semantic-ui-react';

import Header from "./Template/Header";
import Routes from "./Template/Routes";
import Footer from "./Template/Footer";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Container fluid textAlign='center'>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                   <Header />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Routes />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Footer />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
