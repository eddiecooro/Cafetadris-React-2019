import React, { Component } from 'react';
import authUtils from './utils/authUtils';

export class Categories extends Component {
  state = {
    isLoading: true,
    categories: []
  };
  componentDidMount() {
    let accessToken = authUtils.getToken();
    fetch('https://api.spotify.com/v1/browse/categories', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(jsonResponse => {
        console.warn(jsonResponse);
        this.setState({
          isLoading: false,
          categories: jsonResponse.categories.items
        });
      });
  }

  render() {
    console.warn(this.state);
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <ul>
        <h1>Categories</h1>
        {this.state.categories.map((category, index) => (
          <li key={category.id}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
