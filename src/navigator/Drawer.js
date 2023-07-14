import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../screens/Contact';
import About from '../screens/About';
import HomeScreen from '../screens/Home';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Contact' component={Contact}/>
      <Drawer.Screen name='About' component={About}/>
      
    </Drawer.Navigator>
  );
}
export default MyDrawer;