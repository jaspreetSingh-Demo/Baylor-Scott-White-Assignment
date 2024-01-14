import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home-screen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtSplash}>
        Welcome{'\n'}Baylor Scott Assignments!
      </Text>
    </View>
  );
};

export default SplashScreen;
