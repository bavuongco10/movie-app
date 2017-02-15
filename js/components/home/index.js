
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import Tabs from '../tabs';
import MyFooter from '../footer';

const Home = () => (
  <Container theme={myTheme} style={styles.container}>
    <View>
      <Tabs />
    </View>

    <Footer>
      <MyFooter/>
    </Footer>

  </Container>
);
function mapDispatchToProps(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

export default connect(null, mapDispatchToProps)(Home);
