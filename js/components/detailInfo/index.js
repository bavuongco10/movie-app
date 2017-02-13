import React from 'react';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Col,
  Row,
  Grid,
} from 'native-base';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Currency from 'currency-formatter';
import Casts from '../casts';
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

const InfoHeader = ({label}) => (
  <View style={{backgroundColor: '#FE0654', flex: 1}}>
    <Text style={{marginLeft: 15, fontSize: 16, fontWeight: '500', paddingTop: 5, paddingBottom: 5, color: 'white'}}>
      {label}
    </Text>
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
          <InfoHeader label={'Storyline'}/>
          <View style={styles.textBlock}>
            <Text style={styles.regularText}>
              {item.overview}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <InfoHeader label={'Details'}/>
          <View style={styles.textBlock}>
            <Grid>

              <Col size={2}>
                <Row>
                  <Text style={styles.regularText}>Home page</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>Language</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>Countries</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>Budget</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>Directed By</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>Production Co</Text>
                </Row>
              </Col>

              <Col size={5}>
                <Row>
                  <Text style={styles.regularText}>{item.homepage}</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>{item.original_language}</Text>
                </Row>
                <Row>
                  <View style={{flexDirection: 'row'}}>
                    {
                      item.production_countries.map(obj =>
                        <Text key={obj.iso_3166_1} style={styles.regularText}>{obj.name}</Text>
                      )
                    }
                  </View>
                </Row>
                <Row>
                  <Text style={styles.regularText}>{Currency.format(item.budget, { code: 'USD' })}</Text>
                </Row>
                <Row>
                  <Text style={styles.regularText}>{item.casts.crew.filter(obj => obj.job === 'Director')[0].name}</Text>
                </Row>
                <Row>
                  <ScrollView style={{paddingTop: 2}}>
                    {
                      item.production_companies.map(obj =>
                        <Text key={obj.id} style={styles.regularText}>{obj.name}</Text>
                      )
                    }
                  </ScrollView>
                </Row>
              </Col>

            </Grid>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <InfoHeader label={'Casts'}/>
          <Casts cast={_.slice(item.casts.cast, 0, 5)}/>
        </View>
      </View>
    </Content>
  </Container>
)