import React, { Component } from 'react';
import { css } from 'styled-components/macro';
// import Formik, { Field, ErrorMessage,Debug, Form } from './Formik';
import { Formik, Field, ErrorMessage, Form, FieldArray, replace } from 'formik';
import * as Yup from 'yup';
import Slider from './Slider';

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
        initialValues={{
          username: 'Mohammad',
          interests: []
        }}>
        {({ values, setFieldValue, isSubmitting }) => (
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
            <FieldArray name="interests">
              {arrayHelpers => {
                return (
                  <>
                    {values.interests.map((interest, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '20px',
                          margin: '10px',
                          borderRadius: '8px',
                          backgroundColor: '#9B4DCA'
                        }}>
                        <Field
                          placeholder="Your interest name"
                          name={`interests.${index}.name`}
                          style={{ backgroundColor: 'white' }}
                        />
                        <Slider
                          num={5}
                          value={interest.value}
                          onChange={newValue => {
                            setFieldValue(`interests.${index}.value`, newValue);
                          }}
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        arrayHelpers.push({ name: '', value: 0 });
                      }}
                      style={{ width: '240px', margin: '5px auto 40px auto' }}
                      type="button">
                      Add interest
                    </button>
                  </>
                );
              }}
            </FieldArray>
            <input type="submit" disabled={isSubmitting} value="SignUp" />
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignupForm;
