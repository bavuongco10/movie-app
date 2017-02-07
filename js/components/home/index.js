
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import Button from 'react-native-button';
import { Container, Header, Title, Content, Text, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import Tabs from '../tabs';

const {
  pushRoute,
} = actions;

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        {/*<Header>*/}
          {/*<Button transparent onPress={this.props.openDrawer}>*/}
            {/*<Icon name="ios-menu"/>*/}
          {/*</Button>*/}
          {/*<Title>{(this.props.name) ? this.props.name : 'Home'}</Title>*/}
        {/*</Header>*/}
        <Content>
          <Tabs />
        </Content>

        <Footer>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ flex: 0.8}}>Big lie behind Nine’s new show</Text>
            <Button
              containerStyle={{flex: 0.2, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
              style={{fontSize: 15, color: 'white', }}
              onPress = {() => {console.log('I has been pressed!')}}
            >
              Press me!
            </Button>
          </View>
        </Footer>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
