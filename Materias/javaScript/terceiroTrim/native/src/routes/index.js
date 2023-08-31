import { createNativeStackNavigator } from '@react-navigation/native-stack'

import App from '../pages/login'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { App }
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}