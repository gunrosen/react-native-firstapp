import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import {Card, CardSection, Button} from './common';

const AlbumDetail = (props) => {
  const {title, artist, thumbnail_image, image, url } = props.data;
    return (
      <Card>
          <CardSection>
              <View style={styles.imageContainer}>
                  <Image source={{uri: thumbnail_image}} style={styles.image}/>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.textHeader}>{title}</Text>
                  <Text style={styles.textNormal}>{artist}</Text>
              </View>
          </CardSection>

          <CardSection>
              <Image source={{uri:image }} style={styles.imageDetail} />
          </CardSection>

          <CardSection>
              <Button onPress={ () => Linking.openURL(url)} text="Buy Now!"/>
          </CardSection>

      </Card>
    );
};

const styles = {
    image:{
      width: 60,
      height: 60
    },
    imageContainer:{
      justifyContent: 'center',
      alignItems : 'center',
      marginLeft : 5,
      marginRight: 10
    },
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textHeader:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    textNormal:{
        fontSize: 12
    },
    imageDetail:{
        height: 300,
        flex : 1,
        width: null
    }

};

export default AlbumDetail;
