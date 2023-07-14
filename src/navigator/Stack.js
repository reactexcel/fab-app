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
      <Stack.Screen name='Home' component={MyDrawer} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component ={LoginScreen}/>
      <Stack.Screen name='Signup' component={SignupScreen}/>
      
    </Stack.Navigator>

  )
}
export default Stacks;

