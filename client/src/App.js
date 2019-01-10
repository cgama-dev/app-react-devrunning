import React, { Component } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import store from './redux'

import { Provider } from 'react-redux'

import { Container } from 'semantic-ui-react'

import Home from './screens/Home';
import Admin from './screens/Admin';
import Restrito from './screens/Restrito';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/restrito" component={Restrito} />
              <Route path="/login" component={Login} />
              <Route path="/create-account" component={CreateAccount} />
            </Container>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
