import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';

import BottomNavigation from './components/BottomNavigation';
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomNavigation />
    </NavigationContainer>
  );
}

