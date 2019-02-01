import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
  render() {
    return <div>{!this.props.loggedIn && <h1>hello</h1>}</div>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(mapStateToProps)(Test);
