import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export class Category extends Component {
  state = {
    loading: true,
    error: false,
    icons: [],
    playlists: []
  };
  componentDidMount() {
    let categoryId = this.props.match.params.categoryId;

    Promise.all([
      api.categories.getOne(categoryId).then(res => {
        this.setState({
          icons: res.icons
        });
      }),
      api.categories.getPlaylists(categoryId).then(res =>
        this.setState({
          playlists: res.playlists.items
        })
      )
    ])
      .then(responses => this.setState({ loading: false }))
      .catch(err => this.setState({ err: err }));
  }
  render() {
    if (this.state.err) {
      return <div>Error!</div>;
    }
    if (this.state.loading) {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
    let icon = this.state.icons[0];
    return (
      <div>
        <img
          style={{ height: icon.height, width: icon.width }}
          src={icon.url}
        />
        <ul>
          {this.state.playlists.map(playlist => (
            <div key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>
                {playlist.name} ({playlist.tracks.total})
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
