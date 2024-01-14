import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  wrapName: {
    width: '100%',
    borderBottomWidth: 1,
  },
  centerList: {
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 4 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  activityIndicators: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  error: {
    color: colors.error,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  subTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  artist: {
    width: '100%',
    height: 50,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
  },
  artistName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: '2%',
    paddingBottom: 5,
  },
  albumTitle: {
    color: colors.white,
    fontSize: 17,
    width: '90%',
    paddingTop: '2%',
  },
  album: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: colors.white,
    margin: '2%',
  },
  deleteIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    paddingLeft: '5%',
    alignItems: 'center',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
  },
  borderName: {
    borderBottomWidth: 1,
    padding: 10,
  },
  wrapAlbumName: {
    width: '95%',
  },
});

export default styles;
