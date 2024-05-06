//Para funcionar na web, deve-se remover o safe area view.

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: '#858363'}}>
      <StatusBar style='auto' backgroundColor='transparent' barStyle='light-content'/>
      <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
};