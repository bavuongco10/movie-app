
import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import {
  View,
} from 'react-native';
import { Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
} from 'native-base';

import {
  openDrawer
} from '../../actions/drawer';
import {
  fetchMovieDetails,
} from '../../actions/details';

import styles from './styles';
import DetailsBackDropSwiper from '../detailsBackdropSwiper';
import compose from 'recompose/compose';
import lifecyle from 'recompose/lifecycle';
import {
  itemIsLoading,
} from '../../actions/details';

const {
  popRoute,
} = actions;

const Details = ({popRoute, navigation, openDrawer, currentItemId, item, itemIsLoading}) => (
  itemIsLoading
    ? <View><Text>Shit happen</Text></View>
    : <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => popRoute(navigation.key)}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>{'Details'}</Title>
          <Button transparent onPress={openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
            <DetailsBackDropSwiper
              item={item}
            />
        </Content>
    </Container>
);

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  currentItemId: state.currentItemId,
  item: state.item,
  itemIsLoading: state.itemIsLoading,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  popRoute: key => dispatch(popRoute(key)),
  fetchMovieDetails: movieId => dispatch(fetchMovieDetails(movieId)),
  setLoadingStatus: isLoading => dispatch(itemIsLoading(isLoading)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecyle({
    componentWillMount() {
      this.props.fetchMovieDetails(this.props.currentItemId);
    },

    componentWillReceiveProps(nextProps) {
      if (nextProps.item) this.props.setLoadingStatus(false)
    }
  })
)(Details);