import React from 'react';
import Button from 'react-native-button';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const getShitDone = (currentSwiperItem) => {
  console.log('------')
  console.log(currentSwiperItem)
};

const MyFooter = ({currentSwiperItem}) => (
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{ flex: 0.8}}>{getShitDone(currentSwiperItem)}</Text>
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
  currentSwiperItem : state.currentSwiperItem,
});

export default connect(mapStateTopProps, null)(MyFooter);