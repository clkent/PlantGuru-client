import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, focus } from 'redux-form';
import { submitAuthRegistration } from '../../../controller/actions/auth';

class Register extends Component {
  onSubmit(values) {
    let { name, email, password } = values;
    this.props.dispatch(submitAuthRegistration({ name, email, password }));
  }

  render() {
    let { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
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
Register = reduxForm({
  form: 'Register',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('Register', Object.keys(errors)[0]));
  }
})(Register);

const mapStateToProps = state => {
  const formValues = getFormValues('Register')(state) || {};
  return {};
};

export default connect(mapStateToProps)(Register);
