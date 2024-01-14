import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/index';
import {pages} from '../constants/pages';
import HomeScreen from '../screens/Home/index';
import AlbumScreen from '../screens/Albums';

const Stack = createNativeStackNavigator();

function Navigation(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={pages.SPLASH}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={pages.SPLASH} component={SplashScreen} />
      <Stack.Screen name={pages.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={pages.ALBUMS} component={AlbumScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
