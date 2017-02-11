import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getImageUri,
} from '../../helpers/function';
import styles from './styles';

export default ({item}) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: getImageUri(item.poster_path, 'w185') }} style={styles.cardImage} />
    <View style={styles.cardDetails}>
      <Text style={styles.cardTitle}>{item.original_title}</Text>
      <Text style={styles.cardTagline}>{item.tagline}</Text>
      <View style={styles.cardGenre}>
        {
          item.genres.map(obj => <Text key={obj.id} style={styles.cardGenreItem}>{obj.name}</Text>)
        }
      </View>
    </View>
    <View style={styles.cardNumbers}>
      <View style={styles.cardStar}>
        <Icon name="md-star" size={16} color="#F5B642" />
        <Text style={styles.cardStarRatings}>{item.vote_average}</Text>
      </View>
      <Text style={styles.cardRunningHours} />
    </View>
  </View>
);
