import PropTypes from 'prop-types';
// companent is used to add typical REACT component
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { Map } from '../components/Map';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';


class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
      dispatch: PropTypes.func,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      amount: PropTypes.number,
      conversionRate: PropTypes.number,
      isFetching: PropTypes.bool,
      lastConvertedDate: PropTypes.object,
      primaryColor: PropTypes.string,
    };

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(getInitialConversion());
    }

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    //  Buraya tıklandığında CurrencyList'e yönlendirme yapacak.
    //  aşagıdaki kod
    navigation.navigate('CurrencyList', { title: 'Para Birimi', type: 'base' });
  }

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Sonuç Birim', type: 'quote' });
  }

  handleTextChange = (text) => {
    const { dispatch } = this.props;
    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    dispatch(changeCurrencyAmount(text));
  }

  handleSwapCurrency = () => {
    const { dispatch } = this.props;

    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    dispatch(swapCurrency());
  }

  handleOptionPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  }

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor,
    } = this.props;
    let quotePrice = (amount * conversionRate).toFixed(2);

    if (isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={primaryColor}>
        <KeyboardAvoidingView behavior="padding">
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleOptionPress} />
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate.toString()}
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
// bu kısımda tuşa bastığında birimleri birbiriyle değiştirecek
// olan yeri yazıyoruz en azından görsel olarak
const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  // ilkine ulaş yoksa boş obje döndür
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  };
};
export default connect(mapStateToProps)(Home);
