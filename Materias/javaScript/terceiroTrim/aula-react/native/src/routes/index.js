import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../../App';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;