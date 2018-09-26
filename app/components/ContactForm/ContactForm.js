import React from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form-native';
import { View, Button } from 'react-native';
import styles from './styles';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
});

const ContactForm = (props) => {
  const { onPress, title } = props;
  return (
    <View style={styles.container}>
      <Form
        ref={c => this.form = c}
        type={User}
      />
      <Button
        title={title}
        onPress={onPress}
      />
    </View>


  );
};
ContactForm.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};


export default ContactForm;
