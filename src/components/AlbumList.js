import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  //componentWillMount = () => {
     componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response.data));
//    fetch('https://rallycoding.herokuapp.com/api/music_albums', { method: 'GET' })
//    .then((response) => response.json())
//    .then((responseData) => console.log(responseData))
//    .catch((error) => {
//      console.error(error);
//    });
  }
  render() {
    return (
      <View>
        <Text>Album List xfcx!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
