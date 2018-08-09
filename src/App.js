import React, { Component } from 'react';

import { BrowserRouter } from "react-router-dom";

import { Grid, Container, Divider } from 'semantic-ui-react';

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
            <Divider hidden />
            <Grid Container>
              <Grid.Row>
                <Grid.Column>
                    <Routes />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
