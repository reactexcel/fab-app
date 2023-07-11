import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Drawer=createDrawerNavigator();
 const DrawerNavigator=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='About' component={About}/>
      <Drawer.Screen name='Contact' component={Contact}/>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigator