import React from 'react-native';
const { StyleSheet, Dimensions } = React;

const { width } = Dimensions.get('window');

export default StyleSheet.create ({
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
});