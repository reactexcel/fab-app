import React from 'react';
import StackScreen from './src/navigators/StackScreen';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
function App(): JSX.Element {


  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}


export default App;
