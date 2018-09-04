import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

//  react native de global değişkenlere direkt ulaşamıyoruz

class Contact extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

    handleContactPress = () => {
      this.props.navigation.goBack(null);
    }

    render() {
      return (
        <ScrollView />
      );
    }
}


export default Contact;
