import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//  outline: 1 eklersek renklerin altına buttonları ve dışındaki elementleri bize ayırır
//  home bizim componentimizi
//  alert provider ile bir hata olursa mesela url kısmında hata oldu bunları görebiliriz.
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
//  we need to build EStyleSheet before
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});
//  we need to return a function
export default () => <AlertProvider><Navigator /></AlertProvider>;
