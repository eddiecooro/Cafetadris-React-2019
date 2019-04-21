import React, { Component } from 'react';
import { css } from 'styled-components/macro';
// import Formik, { Field, ErrorMessage,Debug, Form } from './Formik';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

let strongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

function CustomErrorMessage(props) {
  return (
    <ErrorMessage {...props}>
      {error => <p style={{ color: 'red' }}>{error}</p>}
    </ErrorMessage>
  );
}

class SignupForm extends Component {
  state = {
    data: {},
    errors: {}
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submited');
  };

  render() {
    return (
      <Formik
        onSubmit={values => {
          console.log('Submited', values);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(8, 'Username is too short!')
            .max(16, 'Username is too long!')
            .required('Username is required'),
          password: Yup.string()
            .required('Password is required')
            .matches(strongRegex, 'Password is weak')
        })}
        // validate={values => {
        //   let errors = {};
        //   if (values.username.length <= 8) {
        //     errors.username = 'Username is short';
        //   }
        //   if (!values.password.match(strongRegex)) {
        //     errors.password = 'Password is weak';
        //   }
        //   if (values.password && values.password !== values.passwordConfirm) {
        //     errors.passwordConfirm = 'Password confirm does not match';
        //   }
        //   return errors;
        // }}
        initialValues={{ username: 'Mohammad' }}>
        {() => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
              padding: 35px;
            `}>
            <label htmlFor="username">Username: </label>
            <Field type="text" name="username" />
            <CustomErrorMessage name="username" />
            <label htmlFor="password">Password: </label>
            <Field type="password" name="password" />
            <CustomErrorMessage name="password" />
            <label htmlFor="passwordConfirm">Password confirm: </label>
            <Field type="password" name="passwordConfirm" />
            <CustomErrorMessage name="passwordConfirm" />
            <input type="submit" />
            {/* <Debug /> */}
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignupForm;
