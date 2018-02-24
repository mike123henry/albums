import React, { Component } from 'react';
import { View } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//    .then(response => this.setState({ albums: response.data }));
//    fetch('https://rallycoding.herokuapp.com/api/music_albums', { method: 'GET' })
//    .then((response) => response.json())
      .then(response => this.setState({ albums: response.data }))
//    .then((response) => console.log(response.data))
      .catch((error) => {
        console.error(error);
      });
  }

   renderAlbums() {
     return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      );
   }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
// /*{this.renderAlbums()}*/
export default AlbumList;
