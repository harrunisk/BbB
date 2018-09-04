import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Contact from '../screens/Contact';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      headerTitle: 'Contact',
    },
  },


}, {
  // for smoothing
  headerMode: 'screen',
});

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});
//  header null navigation bar ekranda görünmesin ama yönlendirme yapsın diye yazılmış.
//  mode modal kısmında sağdan gelmesi yerine aşağıdan yukarı geliyor
export default StackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
},
{
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
  headerMode: 'none',
});
