import React, { Component } from 'react';
import Register from './Landing/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
