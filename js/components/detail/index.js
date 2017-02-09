
import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

const Detail = ({popRoute, navigation, openDrawer}) => (
  <Container style={styles.container}>
    <Header>
      <Button transparent onPress={() => popRoute(navigation.key)}>
        <Icon name="ios-arrow-back" />
      </Button>

      <Title>{'Detail'}</Title>

      <Button transparent onPress={openDrawer}>
        <Icon name="ios-menu" />
      </Button>
    </Header>

    <Content padder>
      <Text>
        {'Create Something Awesome . . .'}
      </Text>
    </Content>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
