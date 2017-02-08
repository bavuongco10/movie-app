import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const loading = require('./img/loading3.gif');
import styles from './styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import path from 'path';
import { fetchNowPlaying, onSwiperScrollEnd } from '../../actions/imageSwiper';

const getImageUri = (pathname) => path.join('https://image.tmdb.org/t/p/w780/', pathname);

const Slide = ({loadHandle, loaded, uri, i}) => (
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

const ImageSwiper = ({onSwiperScrollEnd, items}) => (
  <View>
    <Swiper
      loadMinimal
      loadMinimalSize={1}
      style={styles.wrapper}
      loop={false} height={570}
      showsPagination={false}
      onMomentumScrollEnd = {onSwiperScrollEnd}
    >
      {
        items.map((item, i) =>
          <Slide
            uri={getImageUri(item.poster_path)}
            i={i}
            key={i}
          />
        )
      }
    </Swiper>
  </View>
);


const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchNowPlaying: url => dispatch(fetchNowPlaying()),
  onSwiperScrollEnd: (e, state, context) => dispatch(onSwiperScrollEnd(state)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchNowPlaying();
    }
  })
)(ImageSwiper);

