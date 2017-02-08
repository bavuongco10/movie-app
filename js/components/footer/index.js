import React from 'react';
import Button from 'react-native-button';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

const getShitDone = (currentSwiperIndex, items) => {
  const result = items[currentSwiperIndex];
  return result!= null ? result.original_title: null;
};

const MyFooter = ({currentSwiperIndex, items}) => (
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{ flex: 0.8}}>{getShitDone(currentSwiperIndex, items)}</Text>
    <Button
      containerStyle={{flex: 0.2, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
      style={{fontSize: 15, color: 'white', }}
      onPress = {() => {console.log('I has been pressed!')}}
    >
      Press me!
    </Button>
  </View>
);

const mapStateTopProps = state => ({
  currentSwiperIndex : state.currentSwiperIndex,
  items: state.items,
});

export default connect(mapStateTopProps, null)(MyFooter);