
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

const drawerCover = require('../../../images/drawer-cover.png');
const drawerImage = require('../../../images/logo-kitchen-sink.png');

class SideBar extends Component {
  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >

        <Image source={drawerCover} style={styles.drawerCover}>
          <Image
            square
            style={styles.drawerImage}
            source={drawerImage}
          />
        </Image>

        <List>
          <ListItem button onPress={() => this.props.navigateTo('home', 'home')} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.props.navigateTo('blankPage', 'home')} >
            <Text>Blank Page</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
});

export default connect(null, mapDispatchToProps)(SideBar);
