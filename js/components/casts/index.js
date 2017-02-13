import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import { getImageUri } from '../../helpers/function';

export default ({cast}) => (
  <View>
    <List
      dataArray={cast}
      renderRow={(item) =>
        <ListItem>
          <Thumbnail size={80} source={{ uri: getImageUri(item.profile_path, 'w185') }} />
          <Text style={{ fontSize: 18, fontWeight: '300'}}>{item.name}</Text>
          <Text style={{fontWeight: '300'}}>{item.character}</Text>
        </ListItem>
      }/>
  </View>
);

