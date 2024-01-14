import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  txtSplash: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
export default styles;
