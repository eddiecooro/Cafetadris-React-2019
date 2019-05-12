import React, { Component } from 'react';

export class Filters extends Component {
  handleOptionChage = e => {
    this.props.onChange({
      ...this.props.filters,
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="color"
            value="Blue"
            onChange={this.handleOptionChage}
          />
          Blue
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="Red"
            onChange={this.handleOptionChage}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="Green"
            onChange={this.handleOptionChage}
          />
          Green
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="model"
            value="One"
            onChange={this.handleOptionChage}
          />
          One
        </label>
        <label>
          <input
            type="radio"
            name="model"
            value="Two"
            onChange={this.handleOptionChage}
          />
          Two
        </label>
        <label>
          <input
            type="radio"
            name="model"
            value="Three"
            onChange={this.handleOptionChage}
          />
          Three
        </label>
      </div>
    );
  }
}

export default Filters;
