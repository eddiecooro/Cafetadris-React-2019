import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { css } from 'styled-components/macro';
import authUtils from '../utils/authUtils';

class formGenerator {
  constructor(formSchema) {
    this.formSchema = formSchema;
  }
  setFormSchema = function(formSchema) {
    this.formSchema = formSchema;
  };
  getFormState = () =>
    formSchema.reduce(
      (prevComputedState, currentSchema) => {
        let name = currentSchema.name;
        prevComputedState.data[name] = '';
        prevComputedState.error[name] = '';
        return prevComputedState;
      },
      { data: {}, error: {} }
    );
}
let formSchema = [
  { name: 'username', type: 'text', label: 'Username' },
  { name: 'password', type: 'password', label: 'Password' }
];

let generatedLoginForm = new formGenerator(formSchema);
export class LoginForm extends Component {
  state = { ...generatedLoginForm.getFormState() };

  // handleChange = generatedLoginForm.getHandleChange();
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

  submit = e => {
    e.preventDefault();
    if (
      this.state.data.username === 'Eddie' &&
      this.state.data.password === '12345'
    ) {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          username: '',
          password: ''
        }
      }));
      authUtils.login('wefweefwef');
      this.props.history.push('/');
    } else {
      this.setState({
        error: {
          username: 'Username is not correct',
          password: 'Password is not correct'
        }
      });
    }
  };

  render() {
    return (
      <form
        css={css`
          display: flex;
          flex-direction: column;
          padding: 35px;
        `}>
        {/* {generatedLoginForm.getFormFields()} */}
        {formSchema.map(currentSchema => (
          <React.Fragment key={currentSchema.name}>
            <label htmlFor={currentSchema.name}>
              {currentSchema.label}
            </label>
            <input
              value={this.state.data[currentSchema.name]}
              onChange={this.handleChange}
              name={currentSchema.name}
              type={currentSchema.type}
            />
            {this.state.error[currentSchema.name] && (
              <p style={{ color: 'red' }}>
                {this.state.error[currentSchema.name]}
              </p>
            )}
          </React.Fragment>
        ))}
        <input onClick={this.submit} type="submit" />
      </form>
    );
  }
}

export default withRouter(LoginForm);
