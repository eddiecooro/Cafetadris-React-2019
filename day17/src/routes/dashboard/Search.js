import React, { Component } from 'react';
import Filters from '../../components/Filters';

export class Search extends Component {
  state = {
    filters: {},
    results: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      console.log(this.state.filters);
    }
  }

  handleFiltersChange = filters => {
    this.setState({ filters });
  };

  render() {
    return (
      <div>
        <Filters
          filters={this.state.filters}
          onChange={this.handleFiltersChange}
        />
        {/*<Results products={this.state.results}/>*/}
      </div>
    );
  }
}

export default Search;
