import {NavigationContainer} from '@react-navigation/native';
import Stacks from './src/navigator/Stack';
import AuthProvider from './src/contexts/AuthContext';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stacks />
      </AuthProvider>
    </NavigationContainer>
  );
}
export default App;
