import React from 'react-native';
const { StyleSheet } = React;

export default StyleSheet.create ({
  cardContainer: {
    flex: 1,
    position: 'absolute',
    top: 200,
    right: 16,
    left: 16,
    flexDirection: 'row'
  },

  cardImage: {
    height: 184,
    width: 135,
    borderRadius: 3
  },

  cardDetails: {
    paddingLeft: 10,
    flex: 1,
    paddingTop: 50
  },

  cardTitle: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
    paddingTop: 10
  },

  cardTagline: {
    color: 'black',
    fontSize: 15
  },

  cardGenre: {
    flexDirection: 'row'
  },

  cardGenreItem: {
    textAlign: 'left',
    fontSize: 11,
    marginRight: 5,
    color: 'black'
  },

  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5
  },

  cardStar: {
    flexDirection: 'row'
  },

  cardStarRatings: {
    marginLeft: 5,
    fontSize: 12,
    color: 'white'
  },

  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12
  },

});