import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles';


const _onMomentumScrollEnd = (e, state) => {
  console.log(state.index);
};

export default () => (
  <View>
    <Swiper style={styles.wrapper}
            showsPagination = {false}
            loop={true}
            height={580}
            onMomentumScrollEnd = {_onMomentumScrollEnd}
    >
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Image style={styles.image} source={require('./img/1.jpg')} />
        {/*<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>*/}
          {/*<Text style={{ flex: 0.8}}>Big lie behind Nine’s new show</Text>*/}
          {/*<Button*/}
          {/*containerStyle={{flex: 0.2, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center',}}*/}
          {/*style={{fontSize: 15, color: 'white', }}*/}
          {/*onPress = {() => {console.log('I has been pressed!')}}*/}
          {/*>*/}
          {/*Press me!*/}
          {/*</Button>*/}
        {/*</View>*/}
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
        <Image style={styles.image} source={require('./img/2.jpg')} />
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
        <Image style={styles.image} source={require('./img/3.jpg')} />
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
        <Image style={styles.image} source={require('./img/4.jpg')} />
      </View>
    </Swiper>
  </View>
)

