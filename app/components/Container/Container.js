//  javascript oldugu belli olsun diye  {} kullandık
//  this component will take props as first parameter
import React from 'react';
import PropTypes from 'prop-types';
//  for backround color
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

//  Container komponentinin içine koyduğum
//  herşey divlerde dahil olmak üzere bizim childrenımız oluyor
const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);
Container.propTypes = {
  children: PropTypes.any,
};
export default Container;
