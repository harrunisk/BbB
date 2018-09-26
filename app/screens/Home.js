import PropTypes from 'prop-types';
// companent is used to add typical REACT component
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { Map } from '../components/Map';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'TL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '471.37';
const TEMP_CONVERSION_RATE = '4.7137';
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
    };

  handlePressBaseCurrency = () => {
    //  Buraya tıklandığında CurrencyList'e yönlendirme yapacak.
    //  aşagıdaki kod
    this.props.navigation.navigate('CurrencyList', { title: 'Para Birimi' });
  }

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Sonuç Birim' });
  }

  handleTextChange = (amount) => {
    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    console.log(changeCurrencyAmount(amount));
  }

  handleSwapCurrency = () => {
    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    console.log(swapCurrency());
  }

  handleOptionPress = () => {
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleOptionPress} />
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Birimleri Değiştir"
            onPress={this.handleSwapCurrency}
          />
          <Map />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default Home;
