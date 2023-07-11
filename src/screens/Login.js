import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Login
      </Text>
      <Text style={styles.label}> Email </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder={'Enter your email'}
        value={email}
      />

      <Text style={styles.label}> password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Enter your password"
        value={password}
      />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btn_Text}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link_Text}>
          Don't have an account? <Text style={styles.link_Text2} onPress={() => navigation.navigate('Signup')}>Signup</Text>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header:{
    textAlign: 'center',
    marginBottom: 80,
    color: 'black',
    fontWeight: '400',
    fontSize: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    color: 'black',
    marginLeft: 2,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'orange',
    width: '100%',
    padding: 10,
    borderRadius: 20,
  },

  btn_Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 20
  },
  link_Text: {
    marginTop: 10,
    color: 'black',
    fontSize: 17
  },
  link_Text2:{
   fontWeight:'bold',
   color:'orange'
  }
});
