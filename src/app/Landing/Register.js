import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, formValueSelector } from 'redux-form';

class Register extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    console.log(this.props.formValues);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Register = reduxForm({
  form: 'Register'
})(Register);

const mapStateToProps = state => {
  const formValues = getFormValues('Register')(state) || {};

  return {
    formValues
  };
};

export default connect(mapStateToProps)(Register);
