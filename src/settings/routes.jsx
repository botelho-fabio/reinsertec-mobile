import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from 'screens/SignIn';
import { SignUp } from 'screens/SignUp';
import { Home } from 'screens/Home';
import { Projects } from 'screens/Projects';
import { Settings } from 'screens/Settings';

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='SignIn'
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Screen name='SignIn' component={SignIn} />
        <Screen name='SignUp' component={SignUp} />
        <Screen name='Home' component={Home} />
        <Screen name='Projects' component={Projects} />
        <Screen name='Settings' component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
};