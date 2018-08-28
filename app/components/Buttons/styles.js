import EStyleSheet from 'react-native-extended-stylesheet';
//  flexDirection ile aynı view içindeki iteleri alt üst göstermek yerine
//  yan yana gösteriyoruz

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
