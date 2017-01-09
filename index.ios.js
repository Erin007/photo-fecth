//index.ios.js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  CameraRoll
} from 'react-native';

export default class cameraPractice extends Component {

    state = { images: [] };

    componentDidMount() {
      console.log('made it to componentDidMount')
      const fetchParams = {
        first: 5,
      };
      CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
      console.log('made through componentDidMount')
    }

    storeImages(data) {
      const assets = data.edges;
      const images = assets.map((asset) => asset.node.image);
      this.setState({
        images: images,
      });
    }

    logImageError(err) {
      console.log(err);
    }

    render() {
      console.log("help!")
      return (
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            { this.state.images.map((image) => <Image style={styles.image} source={{ uri: image.uri }} />) }
          </View>
        </ScrollView>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    imageGrid: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    image: {
      width: 100,
      height: 100,
      margin: 10,
    },
  });

AppRegistry.registerComponent('cameraPractice', () => cameraPractice);
