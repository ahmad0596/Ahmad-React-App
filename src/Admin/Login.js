import React, { Component } from "react";

import { BrowserRouter, Route, Link, Redirect, withRouter } from "react-router-dom";

import { Grid, Input, Form, Button, Header } from "semantic-ui-react";

import AdminControl from "./AdminControl";

const AuthExample = () => (
  <BrowserRouter>
    <div>
      <AuthButton />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={AdminControl} />
    </div>
  </BrowserRouter>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter( 
  ({ history }) => fakeAuth.isAuthenticated
  ?
  (
    <Grid>
      <Grid.Column>
        <Header as='h3'>
          <Header.Content>Welcome Admin!</Header.Content>
          <Button content="Sign out" color='red' onClick={() => { fakeAuth.signout(() => history.push("/")); }} />
        </Header>
      </Grid.Column>
    </Grid>
  )
  : 
  (
    <Grid>
      <Grid.Column>
        <Header as='h1' content='You are not logged in and cannot view the Admin Page' />
      </Grid.Column>
    </Grid>
  )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => fakeAuth.isAuthenticated
    ?
    (
      <Component {...props} />
    )
    :
    (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    )
  } />
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      pass:'password',
      redirectToReferrer: false
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.login = this.login.bind(this);
  }

  login = () => { fakeAuth.authenticate(() => {
      if(this.state.input === this.state.pass) {
        this.setState({ redirectToReferrer: true });
      }
      else {
        this.setState({ input: '' });
        alert("Wrong Password");
      }
    });
  };

  handleUpdate(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Grid>
          <Grid.Row>
              <Grid.Column>
                <Form onSubmit={this.login}>
                  <Form.Group>
                    <Form.Input type="password" placeholder='Enter password to view' onChange={this.handleUpdate} value={this.state.input}/>
                    <Form.Button content='Login' />
                  </Form.Group>
                </Form>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default AuthExample;