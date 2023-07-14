import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Stacks from "./src/navigator/Stack";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  
  );
}
export default App;
