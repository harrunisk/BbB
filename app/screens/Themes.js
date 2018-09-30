import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';
//  react native de global değişkenlere direkt ulaşamıyoruz
const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }

    handleThemePress = (color) => {
      const {
        dispatch,
        navigation,
      } = this.props;
      console.log('press themes', color);
      dispatch(changePrimaryColor(color));
      navigation.goBack(null);
    }

    render() {
      return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem text="Mavi" onPress={() => this.handleThemePress(styles.$blue)} selected checkmark={false} iconBackground={styles.$blue} />
          <Separator />
          <ListItem text="Turuncu" onPress={() => this.handleThemePress(styles.$orange)} selected checkmark={false} iconBackground={styles.$orange} />
          <Separator />
          <ListItem text="Yeşil" onPress={() => this.handleThemePress(styles.$green)} selected checkmark={false} iconBackground={styles.$green} />
          <Separator />
          <ListItem text="Mor" onPress={() => this.handleThemePress(styles.$purple)} selected checkmark={false} iconBackground={styles.$purple} />
          <Separator />
        </ScrollView>
      );
    }
}


export default connect()(Themes);
