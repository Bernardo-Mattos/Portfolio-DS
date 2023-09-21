import { StatusBar } from 'react-native';
import Routes from './src/Routes/route';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor='#d1e2c9' barStyle='default'/>
    </NavigationContainer>
  );
}