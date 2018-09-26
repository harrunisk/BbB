import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ContactForm } from '../components/ContactForm';


//  react native de global değişkenlere direkt ulaşamıyoruz
const ButtonTitle = 'Bize Ulaşın';

class Contact extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

    handleContactPress = () => {
      this.props.navigation.goBack(null); 
    }

    handlePressContactUs = () => {
      const value = this.form.getValue(); // use that ref to get the form value
      console.log('value: ', value);
    }

    render() {
      return (
        <KeyboardAvoidingView>
          <ContactForm
            title={ButtonTitle}
            onPress={this.handlePressContactUs}
          />

        </KeyboardAvoidingView>

      );
    }
}


export default Contact;
