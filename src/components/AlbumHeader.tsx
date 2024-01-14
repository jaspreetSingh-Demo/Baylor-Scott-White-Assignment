import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {colors} from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

interface AlbumHeaderProps {
  onPressStar: () => void;
  goBack: () => void;
  label: string;
}

const AlbumHeader: React.FC<AlbumHeaderProps> = ({
  onPressStar,
  goBack,
  label,
}) => {
  return (
    <View style={styles.wrapHeader}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="chevron-back" color={colors.white} size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{label}</Text>
      <TouchableOpacity onPress={onPressStar}>
        <Entypo name="star" color={colors.yellow} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  } as TextStyle,
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: '5%',
  } as ViewStyle,
});

export default AlbumHeader;
