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
const loading = require('../imageSwiper/img/loading3.gif');
import styles from '../imageSwiper/styles';

const Slide = ({uri, i}) => (
  <View style={styles.slide}>
    <Image style={styles.image} source={{uri: uri}} />
    {
      !true
      && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>
);


const DetailsBackdropSwiper = ({item}) => (
  <View>
    <Swiper
      loadMinimal
      loadMinimalSize={1}
      style={styles.wrapper}
      showsPagination={false}
      loop={false}
      height={100}
    >{
      item.images.backdrops.map((obj, i) =>
        <Slide
          uri={getImageUri(obj.file_path)}
          i={i}
          key={i}
        />
      )
    }
    </Swiper>
  </View>
);

export default DetailsBackdropSwiper;