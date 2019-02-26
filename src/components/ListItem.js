import React, {Component} from 'react';
import { View, Text, StyleSheet,FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../action';

class ListItem extends Component{
    renderDescription(){
      console.log(`Compare ${this.props.library.item.id} and ${ this.props.selectedLibraryId}`);
      if(this.props.library.item.id === this.props.selectedLibraryId){
        return (<Text>{this.props.library.item.description}</Text>);
      }
    }
    render(){
        const { id,title } = this.props.library.item;
        // console.log(`id: ${id} and title: ${title}`);
        return(
              <TouchableWithoutFeedback onPress={() => this.selectItem(id)} style={{backgroundColor:'black'}}>
                  <View>
                      <CardSection  style={{backgroundColor:'blue'}}>
                          <Text style={{backgroundColor:'red'}}>{title}</Text>
                      </CardSection>
                      {this.renderDescription()}
                  </View>

              </TouchableWithoutFeedback>);
    }

    selectItem(id){
        console.log('Just click to '+id);
        this.props.selectLibrary(id);
    }
}

const styles = {
  selected:{
    backgroundColor: 'red'
  }
}

const mapStateToProps = state => {
    console.log(`mapping state: ${state.selectedLibraryId}`);
    return {selectedLibraryId : state.selectedLibraryId}
};

export default connect(mapStateToProps, actions)(ListItem);
