import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
};