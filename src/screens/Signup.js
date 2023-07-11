import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  

  const handleSignup = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  
    let hasError = false;
  
    if (!email) {
      setEmailError('Please enter an email.');
      hasError = true;
    }
  
    if (!password) {
      setPasswordError('Please enter a password.');
      hasError = true;
    }
  
    if (!confirmPassword) {
      setConfirmPasswordError('Please enter a confirm password.');
      hasError = true;
    }
  
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      hasError = true;
    }
  
    if (hasError) {
      return;
    }
  
    if (!validateEmail()) {
      return;
    }
  
    if (!validatePassword()) {
      return;
    }
  
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  
    // Perform signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Login');
  };
  

  const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
      return false;
    }
    return true;
  };
  
  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      return false;
    }
    return true;
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}
        >Sign up</Text>
        <Text style={styles.label}>What's your email?</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder={'Enter your email'}
          value={email}
        />
<Text style={styles.error}>{emailError}</Text>
        <Text style={styles.label}>Create a password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholder='Create a password'
          value={password}
        />
        <Text style={styles.error}>{passwordError}</Text>

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
          placeholder='Confirm password'
          value={confirmPassword}
        />
        <Text style={styles.error}>{confirmPasswordError}</Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btn_Text}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.link_Text} >
            Have an account?
            <Text style={styles.link_Text2} onPress={() => {
              navigation.navigate('Login')
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              setEmailError('');
              setPasswordError('');
              setConfirmPasswordError('');
              
              }}> Login</Text>
          </Text>

        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  header:{
    textAlign: 'center',
    marginBottom: 80,
    color: 'black',
    fontWeight: '400',
    fontSize: 30
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    color: 'black',
    marginLeft: 2
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5
  },
 
  btn: {
    backgroundColor: 'orange',
    width: "100%",
    padding: 10,
    borderRadius: 20
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
  },
  error:{
    color:'red',
    marginTop:-25,
    marginBottom:20
  }

});

export default SignupScreen;
