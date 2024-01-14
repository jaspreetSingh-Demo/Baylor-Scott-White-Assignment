import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: '5%',
  },
  error: {
    color: colors.error,
  },
  img: {
    flex: 1,
    width: 150,
    height: 150,
  },
});

export default styles;
