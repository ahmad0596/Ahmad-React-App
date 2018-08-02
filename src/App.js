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
          <div>
            <Header />
              <Grid container>
                <Grid.Row>
                  <Grid.Column>
                      <Routes />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
