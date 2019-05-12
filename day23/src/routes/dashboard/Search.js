import React, { Component } from 'react';
import Filters from 'components/Filters';
import axiosInstance from '../../api/axios';
import debounce from 'debounce';

export class Search extends Component {
  state = {
    query: '',
    filters: {},
    results: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      console.log(this.state.filters);
    }
  }

  handleFiltersChange = filters => {
    this.setState({ filters });
  };

  search = () => {
    console.log('Here');
    axiosInstance('/search', {
      params: {
        q: this.state.query,
        type: 'track'
      }
    }).then(res => {
      console.log(res);
      this.setState({ results: res.data.tracks.items.map(i => i.name) });
    });
  };

  debouncedSearch = debounce(this.search, 500, false);

  handleQueryChange = event => {
    this.setState({ query: event.target.value }, () => {
      this.debouncedSearch();
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        <Filters
          filters={this.state.filters}
          onChange={this.handleFiltersChange}
        />
        <pre>{JSON.stringify(this.state.results, null, 4)}</pre>
        {/* <Results products={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;
