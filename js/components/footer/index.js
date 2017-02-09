import React from 'react';
import Button from 'react-native-button';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import navigateTo from '../../actions/sideBarNav';
import {
  DETAIL,
} from '../../constants/route';
const getCurrentItem = (currentSwiperIndex, items) => items[currentSwiperIndex];

const getAttribute = (currentSwiperIndex, items, key) => {
  const currentItem = getCurrentItem(currentSwiperIndex, items);
  return currentItem ? currentItem[key] : null;
};

const MyFooter = ({currentSwiperIndex, items, navigateTo}) => (
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{ flex: 0.8}}>{getAttribute(currentSwiperIndex, items, 'original_title')}
    </Text>
    <Button
      containerStyle={{flex: 0.2, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
      style={{fontSize: 15, color: 'white', }}
      onPress = {() => {
        navigateTo(DETAIL)
        console.log(getAttribute(currentSwiperIndex, items, 'id'))}
      }
    >
      Press me!
    </Button>
  </View>
);

const mapStateTopProps = state => ({
  currentSwiperIndex : state.currentSwiperIndex,
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
})

export default connect(mapStateTopProps, mapDispatchToProps)(MyFooter);