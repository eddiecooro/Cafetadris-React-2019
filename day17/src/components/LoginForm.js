import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { css } from 'styled-components/macro';
import authUtils from '../utils/authUtils';
import { Formik, Field, Form, ErrorMessage } from 'formik';

let fakeLogin = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'Eddie' && password === '123456') {
        resolve({ status: 200, message: 'Logged in succesfuly' });
      } else {
        reject({ status: 401, message: 'Username/Password is wrong' });
      }
    }, 2000);
  });

export class LoginForm extends Component {
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

  handleSubmit = (values, { setSubmitting }) => {
    fakeLogin(values.username, values.password)
      .then(result => {
        console.log(result.message);
        // authUtils.login('wefweefwef');
        // this.props.history.push('/');
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
    // if (
    //   this.state.data.username === 'Eddie' &&
    //   this.state.data.password === '12345'
    // ) {
    //   this.setState(prevState => ({
    //     data: {
    //       ...prevState.data,
    //       username: '',
    //       password: ''
    //     }
    //   }));
    //   authUtils.login('wefweefwef');
    //   this.props.history.push('/');
    // } else {
    //   this.setState({
    //     errors: {
    //       username: 'Username is not correct',
    //       password: 'Password is not correct'
    //     }
    //   });
    // }
  };

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{ username: 'Eddie', password: '' }}>
        {({ isSubmitting }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
              padding: 35px;
            `}>
            <label htmlFor="username">Username: </label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" />
            <label htmlFor="password">Password: </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
            <input disabled={isSubmitting} type="submit" />
            {/* <Debug /> */}
          </Form>
        )}
      </Formik>
    );
  }
}

export default withRouter(LoginForm);
