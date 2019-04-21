import React, { Component } from 'react';

let {
  Provider: FormikProvider,
  Consumer: FormikConsumer
} = React.createContext();

export function Debug() {
  return (
    <FormikConsumer>
      {formikState => <pre>{JSON.stringify(formikState, null, 4)}</pre>}
    </FormikConsumer>
  );
}

export class Field extends Component {
  render() {
    let { name } = this.props;
    return (
      <FormikConsumer>
        {formikState => (
          <input
            {...this.props}
            value={formikState.values[name]}
            onChange={formikState.handleChange}
            onBlur={formikState.handleBlur}
          />
        )}
      </FormikConsumer>
    );
  }
}

export function Form(props) {
  return (
    <FormikConsumer>
      {({ handleSubmit }) => <form {...props} onSubmit={handleSubmit} />}
    </FormikConsumer>
  );
}

export function ErrorMessage(props) {
  return (
    <FormikConsumer>
      {({ touched, errors }) =>
        touched[props.name] && errors[props.name] ? (
          <p style={{ color: 'red' }}>{errors[props.name]}</p>
        ) : null
      }
    </FormikConsumer>
  );
}

class Formik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.initialValues || {},
      errors: {},
      touched: {},
      isSubmiting: false
    };
  }

  setErrorsFromUserProvidedValidate() {
    if (typeof this.props.validate === 'function') {
      let errors = this.props.validate(this.state.values);
      this.setState({ errors });
    }
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState(
      prevState => ({
        values: {
          ...prevState.values,
          [name]: value
        }
      }),
      () => {
        this.setErrorsFromUserProvidedValidate();
      }
    );
  };

  handleBlur = e => {
    let { name } = e.target;
    this.setState(prevState => ({
      touched: { ...prevState.touched, [name]: true }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmiting: true });
    this.props.onSubmit(this.state.values, {
      setSubmiting: submiting => {
        this.setState({ isSubmiting: submiting });
      }
    });
  };

  render() {
    let formikState = {
      ...this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit
    };
    return (
      <FormikProvider value={formikState}>
        {this.props.children(formikState)}
      </FormikProvider>
    );
  }
}

export default Formik;
