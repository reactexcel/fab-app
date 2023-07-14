import {View, Text, Button} from 'react-native';
import React from 'react';

function HomeScreen({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 25}}>Welcome to my home Page</Text>
      <Button title="back" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
export default HomeScreen;
