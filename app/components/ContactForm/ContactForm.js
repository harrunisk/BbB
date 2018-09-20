import t from 'tcomb-form-native';
import { View, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import styles from './styles';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
});

const ContactForm = ({ }) => (
  <KeyboardAvoidingView behavior="padding">

    <View style={styles.container}>
      <Form type={User} />

    </View>
  </KeyboardAvoidingView>


);


export default ContactForm;
