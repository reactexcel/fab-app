import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import DrawerScreen from './Drawer';

const Stack = createStackNavigator();
export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Screen' component={DrawerScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}