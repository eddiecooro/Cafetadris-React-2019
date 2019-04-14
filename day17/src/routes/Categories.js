import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export class Categories extends Component {
  state = {
    isLoading: true,
    categories: []
  };
  componentDidMount() {
    api.categories
      .getAll()
      .then(jsonResponse => {
        this.setState({
          isLoading: false,
          categories: jsonResponse.categories.items
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  render() {
    console.warn(this.state);
    if (this.state.error) {
      throw this.state.error;
    }
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    const currentPath = this.props.match.path;
    return (
      <ul>
        <h1>Categories</h1>
        {this.state.categories.map((category, index) => (
          <li key={category.id}>
            <Link to={`${currentPath}/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
