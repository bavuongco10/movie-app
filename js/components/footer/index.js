import React from 'react';
import Button from 'react-native-button';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const MyFooter = ({imageIndex}) => (
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{ flex: 0.8}}>Big lie behind Nine’s new show: {imageIndex}</Text>
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
  imageIndex : state.swiperImageIndex,
});

export default connect(mapStateTopProps, null)(MyFooter);