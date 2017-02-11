import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper'
const loading = require('./../../../images/loading3.gif');
import styles from './styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import {
  fetchNowPlaying,
  onSwiperScrollEnd,
  itemsIsLoading,
} from '../../actions/imageSwiper';
import { Button } from 'native-base';
import {
  getImageUri,
} from '../../helpers/function';

const Slide = ({uri, i, isLoading}) => (
  <View style={styles.slide}>
    <Image style={styles.image} source={{uri: uri}} />
    {
      isLoading
      && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>
);

const ImageSwiper = ({onSwiperScrollEnd, items, currentSwiperIndex, isLoading}) => (
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
            uri={getImageUri(item.poster_path, 'w780')}
            i={i}
            key={i}
            isLoading={isLoading}
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
  setLoadingStatus: isLoading => dispatch(itemsIsLoading(isLoading)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchNowPlaying();
    },

    componentWillReceiveProps(nextProps) {
      if(nextProps.items) this.props.setLoadingStatus(false);
    },
  })
)(ImageSwiper);

