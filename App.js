/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header, Spinner } from './src/components/common';
/*import AlbumList from './src/components/AlbumList'; */
import LoginForm from './src/components/LoginForm';
import LibraryList from './src/components/LibraryList';


type Props = {};
export default class App extends Component<Props> {
  state = {logginIn: null};

  componentWillMount(){
      firebase.initializeApp( {
              apiKey: 'AIzaSyBDPfHW8grY-4cmUka0J0zxok-dUOGaUEc',
              authDomain: 'authentication-28d02.firebaseapp.com',
              databaseURL: 'https://authentication-28d02.firebaseio.com',
              projectId: 'authentication-28d02',
              storageBucket: 'authentication-28d02.appspot.com',
              messagingSenderId: '420746767018'
              });

      firebase.auth().onAuthStateChanged((user) => {
                if(user){
                  this.setState({logginIn: true});
                } else {
                  this.setState({logginIn: false});
                }
              });

  }


renderLoginForm(){
  switch(this.state.logginIn){
    case true:
         return (
           <Button onPress={() => {
             firebase.auth().signOut();
             }}  title="Log out"/>
           );
    case false:
         return   <LoginForm/>;
    default:
          return <Spinner size="large"/>
  }
}

  render() {
    return (
          /*{this.renderLoginForm()} */
          <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
              <Header text='Tech Stack'></Header>
              <LibraryList/>
            </View>
          </Provider>

    );
  }
}

const styles = StyleSheet.create({

});
