import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/Container';


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
        <KeyboardAvoidingView>
          <ContactForm />

        </KeyboardAvoidingView>

      );
    }
}


export default Contact;
