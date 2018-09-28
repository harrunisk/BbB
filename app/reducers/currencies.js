import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  swapCurrency,
  changeCurrencyAmount,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};


// we are not modifying input we are creating new brand object
// in CHANGE_CURRENCY_AMOUNT
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        // ..state ile önceki statein tamamını kopyalıyor ve yeni state yaratıyor
        ...state,
        amount: action.amount || 0,
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

console.log('initialState', initialState);
console.log('swapCurrency', reducer(initialState, swapCurrency()));
console.log('changeCurrencyAmount', reducer(initialState, changeCurrencyAmount(222)));
export default reducer;
