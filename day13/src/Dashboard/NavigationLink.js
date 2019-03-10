import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavigationLink extends Component {
  render() {
    let isActive = false;
    return (
      <Link {...this.props}>
        <this.props.children {...props} isActive={isActive} />
      </Link>
    );
  }
}

export default NavigationLink;
