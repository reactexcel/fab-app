import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import FormInput from '../components/FormInput';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = () => {
    setError('')
    

   
      if (!email && !password) {
        setError('Please fill all fields.');
        return
      }
      
  }
  
    


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Login
      </Text>
<Text style={{color:'red',textAlign:'right'}}>{error}</Text>
      <FormInput textHeader={'Enter your email'} value={email} onChangeText={(text) => setEmail(text)} placeholder="Enter your Email"/>
      <FormInput textHeader={'Password'} value={password} onChangeText={(text) => setPassword(text)} placeholder="Enter your Password" secureTextEntry={true}
      />
       
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={()=>{
          handleLogin()
        }}>
          <Text style={styles.btn_Text}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link_Text}>
          Don't have an account? <Text style={styles.link_Text2} onPress={() => {
            navigation.navigate('Signup')
            }}>Signup</Text>
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
  header: {
    textAlign: 'center',
    marginBottom: 80,
    color: 'black',
    fontWeight: '400',
    fontSize: 30,
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
  link_Text2: {
    fontWeight: 'bold',
    color: 'orange'
  },
  error: {
    color: 'red',
    marginTop: -25,
    marginBottom: 20
  }
});

export default LoginScreen;