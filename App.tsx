import React from 'react';
import StackScreen from './src/navigators/StackScreen';
import { NavigationContainer } from '@react-navigation/native';
function App(): JSX.Element {


  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}



export default App;
