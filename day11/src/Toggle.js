import React, { Component } from 'react';
import Switch from './Switch/Switch';

const ToggleContext = React.createContext();

const ToggleContextConsumer = props => {
  return (
    <ToggleContext.Consumer {...props}>
      {value => {
        if (!value)
          throw new Error(
            'You cannot render Toggle.X outside of Toggle component'
          );
        return props.children(value);
      }}
    </ToggleContext.Consumer>
  );
};
export class Toggle extends Component {
  // static On = props => (props.on ? props.children : null);
  // static Off = props => (!props.on ? props.children : null);
  static On = props => {
    return (
      <ToggleContextConsumer>
        {value => (value.on ? props.children : null)}
      </ToggleContextConsumer>
    );
  };
  static Off = props => {
    return (
      <ToggleContextConsumer>
        {value => (!value.on ? props.children : null)}
      </ToggleContextConsumer>
    );
  };
  static Button = props => {
    return (
      <ToggleContextConsumer>
        {value => (
          <Switch on={value.on} onClick={value.toggle} {...props} />
        )}
      </ToggleContextConsumer>
    );
  };
  state = {
    on: false
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, toggle: this.toggle }}>
        {this.props.children}
      </ToggleContext.Provider>
    );
    // return React.Children.map(this.props.children, child =>
    //   React.cloneElement(child, {
    //     on: this.state.on,
    //     toggle: this.toggle
    //   })
    // );
  }
}

export default Toggle;
