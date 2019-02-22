import React, {Component} from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common';
export default class LoginForm extends Component {

      state = {email:'',password:'',error:'',loading: false};

      onButtonPress(){
            const {email,password} = this.state;
            this.setState({error: '',loading:true});
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                  firebase.auth().createUserWithEmailAndPassword(email,password)
                  .then(this.onLoginSuccess.bind(this) )
                  .catch( this.onLoginFail.bind(this) );
            });
      }

      onLoginSuccess(){
          this.setState({
              email:'',
              password:'',
              loading: false,
              error:''
          });
      }

      onLoginFail(){
          this.setState({
              loading: false,
              error:'Authentication fail'
          });
      }
      renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }
          return   <Button text="Log in"
            onPress={this.onButtonPress.bind(this)}/>
      }

      render(){

        return (
          <Card>
              <CardSection>
                  <Input  label = "Email"
                          placeholder="user@gmail.com"
                          value = {this.state.email}
                          onChangeText={ text => this.setState({email: text})}
                  />
              </CardSection>

              <CardSection>
                  <Input  secureTextEntry
                          label = "Password"
                          placeholder="Password"
                          value = {this.state.password}
                          onChangeText={ text => this.setState({password: text})}
                  />
              </CardSection>
              <Text style={styles.errorStyle}>
                    {this.state.error}
              </Text>
              <CardSection>
                    {this.renderButton()}
              </CardSection>
          </Card>

        );
      }
}

const styles = {
    errorStyle : {
      color:'red',
      fontSize:20,
      alignSelf:'center'

    }
};
