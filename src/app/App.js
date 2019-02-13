import React, { Component } from 'react';
import Register from './Landing/Register/Register';
import Login from './Landing/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './PlantGuru/Test/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default App;
