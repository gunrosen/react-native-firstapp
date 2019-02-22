/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
/*import AlbumList from './src/components/AlbumList'; */
import LoginForm from './src/components/LoginForm';


type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){
      firebase.initializeApp( {
              apiKey: 'AIzaSyBDPfHW8grY-4cmUka0J0zxok-dUOGaUEc',
              authDomain: 'authentication-28d02.firebaseapp.com',
              databaseURL: 'https://authentication-28d02.firebaseio.com',
              projectId: 'authentication-28d02',
              storageBucket: 'authentication-28d02.appspot.com',
              messagingSenderId: '420746767018'
  });

  }
  render() {
    return (
      <View style={{flex:1}}>
          <Header text='Authentication'></Header>
          <LoginForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
