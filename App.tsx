import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Stacks from "./src/navigator/Stack";
import AuthProvider from "./src/contexts/AuthContext";


function App(): JSX.Element {
  return (
    <NavigationContainer>
       
      <AuthProvider>
        <Stacks/>
      </AuthProvider>
     
    </NavigationContainer>
  
  );
}
export default App;
