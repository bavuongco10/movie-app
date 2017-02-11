import React from 'react-native';
const { StyleSheet, Platform } = React;

export default StyleSheet.create({
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'android') ? 7 : 5,
  },

  sidebarIcon: {
    fontSize: 21,
    color: '#fff',
    lineHeight: (Platform.OS === 'android') ? 21 : 25,
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 20,
  },

  textBlock: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },

  regularText: {
    fontSize: 14,
    fontWeight: '300'
  },

});