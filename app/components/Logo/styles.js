import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;
export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 4,
  $smallImageSize: imageWidth / 8,
  $largeContainerSize: imageWidth / 2,
  $largeImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
    marginTop: 25,
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',

  },
});
