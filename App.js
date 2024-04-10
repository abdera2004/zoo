import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      
      <StatusBar style='auto' backgroundColor='#669900' barStyle='light-content'/>
      <Routes/>
      
    </NavigationContainer>
  );
};