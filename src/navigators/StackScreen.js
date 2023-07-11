import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name='Home' component={DrawerNavigator} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}