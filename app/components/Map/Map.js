import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = ({ children }) => (
  <View style={styles.container}>
    {children}
    <MapView
      style={styles.map}
      region={{
        latitude: 59.32932349999999,
        longitude: 18.068580800000063,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 59.32932349999999,
          longitude: 18.068580800000063,
        }}
        title="Adres Başlığı"
        description="Description"
      />
    </MapView>
  </View>
);
Map.propTypes = {
  children: PropTypes.any,
};

export default Map;
