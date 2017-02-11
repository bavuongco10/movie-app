import React from 'react';

import {
  View,
  Text
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
} from 'native-base';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import _ from 'lodash';

const sanitizeReleaseDate = (date) => {
 const parts = _.split(date, '-');
 return parts[2] + '/' + parts[1];
}

const InfoIcon = ({item, label, value, icon, style}) => (
  <View style={{flexDirection: 'row', marginLeft: 10,}}>
    <View style={style}>
      {icon}
    </View>
    <View>
      <Text style={{fontSize: 10}}>{label}</Text>
      <Text style={{fontSize: 20, fontWeight: '300'}}>{value}</Text>
    </View>
  </View>
);

export default ({item}) => (
  <Container>
    <Content>
      <View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <InfoIcon
            item={item}
            style={[styles.iconContainer, { backgroundColor: '#FCD667', marginRight: 10}]}
            label={'IN THEATER'}
            value={sanitizeReleaseDate(item.release_date)}
            icon={<FontAwsomeIcon name="calendar" style={styles.sidebarIcon} />}
          />

          <InfoIcon
            item={item}
            style={[styles.iconContainer, { backgroundColor: '#774FA8', marginRight: 10}]}
            label={'DURATION'}
            value={item.runtime}
            icon={<FontAwsomeIcon name="clock-o" style={styles.sidebarIcon} />}
          />

          <InfoIcon
            item={item}
            style={[styles.iconContainer, { backgroundColor: '#80D2C6', marginRight: 10}]}
            label={'RATING'}
            value={item.vote_average}
            icon={<FontAwsomeIcon name="star-o" style={styles.sidebarIcon} />}
          />
        </View>

        <View style={{marginTop: 20}}>
          <View style={{backgroundColor: '#FE0654', flex: 1}}>
            <Text style={{marginLeft: 15, fontSize: 16, fontWeight: '500', paddingTop: 5, paddingBottom: 5, color: 'white'}}>
              Overview
            </Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              {item.overview}
            </Text>
          </View>
        </View>

      </View>
    </Content>
  </Container>
)