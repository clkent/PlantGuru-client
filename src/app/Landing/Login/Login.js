import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { submitAuthLogin } from '../../../controller/actions/auth';

class Login extends Component {
  onSubmit(values) {
    let { email, password } = values;
    this.props.dispatch(submitAuthLogin({ email, password }));
  }

  render() {
    let { handleSubmit } = this.props;
    if (this.props.loggedIn) return <Redirect to="/test" />;
    return (
      <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

/**
 * Connects Register Component to Redux Form
 */
Login = reduxForm({
  form: 'Login',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('Login', Object.keys(errors)[0]));
  }
})(Login);

const mapStateToProps = state => {
  console.log(state);
  return {
    loggedIn: state.loginReducer.loggedIn
  };
};

export default connect(mapStateToProps)(Login);
