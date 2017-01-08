/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  //stuff I added based on the CameraRoll tutorial:
  ScrollView,
  Iamge,
  CameraRoll,
} from 'react-native';


//CameraRoll code from https://thebhwgroup.com/blog/accessing-iphone-camera-roll-images-react-native
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   imageGrid: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center'
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 10,
//   },
// });
//
// const reactImageProject = React.createClass({
//   getInitialState() {
//     return {
//       images: [],
//     };
//   },
//
//   componentDidMount() {
//     const fetchParams = {
//       first: 5,
//     };
//     CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
//   },
//
//   storeImages(data) {
//     const assets = data.edges;
//     const images = assets.map((asset) => asset.node.image);
//     this.setState({
//       images: images,
//     });
//   },
//
//   logImageError(err) {
//     console.log(err);
//   },
//
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.imageGrid}>
//           { this.state.images.map((image) => <Image style={styles.image} source={{ uri: image.uri }} />) }
//         </View>
//       </ScrollView>
//     );
//   }
// });

//end of CameraRoll Tutorial Code


export default class cameraPractice extends Component {
  render() {
    return (
      <View style={RNstyles.container}>
        <Text style={RNstyles.welcome}>
           Can I get photos?!
        </Text>
      </View>
    );
  }
}

const RNstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('cameraPractice', () => cameraPractice);
