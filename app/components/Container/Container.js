//  javascript oldugu belli olsun diye  {} kullandık
//  this component will take props as first parameter
import React from 'react';
import PropTypes from 'prop-types';
//  for backround color
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

//  Container komponentinin içine koyduğum
//  herşey divlerde dahil olmak üzere bizim childrenımız oluyor
const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};
export default Container;
