import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
constructor(props){
  super(props);
  this.state = {albums : []};
}


  render(){
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }

  componentWillMount(){
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then( response => {
        this.setState({albums: response.data});
      })
      .catch(error => console.log(error));

  }

  renderAlbums(){

    if(this.state.albums){
        return this.state.albums.map( album => <AlbumDetail data={album}/>);
      } else {
     return <Text>Empty List</Text>;
   }
  }

}
const styles = {
  viewContainer:{

  }

};
