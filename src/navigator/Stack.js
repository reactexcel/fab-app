import 'react-native-gesture-handler';
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import MyDrawer from "./Drawer";



const Stack=createStackNavigator();
function Stacks(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component ={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Signup' component={SignupScreen} options={{headerShown:false}}/>
      
    </Stack.Navigator>

  )
}
export default Stacks;

