import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {
  getImageUri,
} from '../../helpers/function';
const loading = require('../../../images/loading3.gif');
import styles from './styles';

const Slide = ({uri, i}) => (
  <View style={styles.slide}>
    <Image style={styles.imageBackDrop} source={{uri: uri}} />
    {
      !true
      && <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
          <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']} style={styles.linearGradient} />
        </View>
    }
  </View>
);

const DetailsBackdropSwiper = ({item}) => (
  <View>
    <Swiper
      autoplay
      loadMinimal
      autoplayTimeout={4}
      loadMinimalSize={1}
      style={styles.wrapper}
      showsPagination={false}
      loop
      height={248}
      index={5}
    >{
      item.images.backdrops.map((obj, i) =>
        <Slide
          uri={getImageUri(obj.file_path, 'w780')}
          i={i}
          key={i}
        />
      )
    }
    </Swiper>
  </View>
);

export default DetailsBackdropSwiper;