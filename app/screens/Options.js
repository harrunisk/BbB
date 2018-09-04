import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  }

  handlePressSiteBaltus = () => {
    Linking.openURL('https://baltus.balikesir.bel.tr/').catch(() => this.props.alertWithType('error', 'SOrry!', 'Baltus.bel.tr şuan açılamıyor.'));
  };

  handlePressSiteBalBel = () => {
    Linking.openURL('http://www.balikesir.bel.tr/').catch(() => this.props.alertWithType('error', 'SOrry!', 'Balıkesir.bel.tr şuan açılamıyor.'));
  };

  handlePressContact = () => {
    this.props.navigation.navigate('Contact');
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Tema Seçimi"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Baltus.bel.tr"
          onPress={this.handlePressSiteBaltus}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <ListItem
          text="Balikesir.bel.tr"
          onPress={this.handlePressSiteBalBel}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
        <Separator />
        <ListItem
          text="İletişim"
          onPress={this.handlePressContact}
          customIcon={<Ionicons name={`${ICON_PREFIX}-contact`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connectAlert(Options);
