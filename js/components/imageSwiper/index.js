import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper'
const loading = require('./img/loading3.gif');
import styles from './styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { fetchNowPlaying, onSwiperScrollEnd } from '../../actions/imageSwiper';
import { Button } from 'native-base';
import {
  getImageUri,
} from '../../helpers/function';

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

const ImageSwiper = ({onSwiperScrollEnd, items, currentSwiperIndex}) => (
  <View>
    <Swiper
      loadMinimal
      loadMinimalSize={1}
      style={styles.wrapper}
      loop={false}
      height={570}
      showsPagination={false}
      onMomentumScrollEnd = {onSwiperScrollEnd}
    >{
        items.map((item, i) =>
          <Slide
            uri={getImageUri(item.poster_path)}
            i={i}
            key={i}
          />
        )
      }
    </Swiper>
    <Button bordered info style={styles.scoreButton}>
      <Text>
        { items.length !== 0 ? items[currentSwiperIndex].vote_average : null}
      </Text>
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

