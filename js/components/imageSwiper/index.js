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
import Button from 'react-native-button';

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

const ImageSwiper = ({onSwiperScrollEnd, items, currentSwiperIndex}) => (
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
    <Button
      containerStyle={{
        height: 50,
        width: 50,
        top: 470,
        left: 20,
        position: 'absolute',
      }}
    >
      { items.length !== 0 ? items[currentSwiperIndex].vote_average : null}
    </Button>
  </View>
);


const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
  currentSwiperIndex: state.currentSwiperIndex,
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

