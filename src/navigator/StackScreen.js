import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();
export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}