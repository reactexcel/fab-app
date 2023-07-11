import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {

    if (!email && !password && !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Please enter an email.');
      return;
    }

    if (!password) {
      Alert.alert('Error', 'Please enter a password.');
      return;
    }

    if (!confirmPassword) {
      Alert.alert('Error', 'Please enter a confirm password.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');

    if (validateEmail() && validatePassword()) {
      // Perform signup logic here
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('Login')
    }

  };

  const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email address.');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters.');
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

        <Text style={styles.label}>Create a password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholder='Create a password'
          value={password}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
          placeholder='Confirm password'
          value={confirmPassword}
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btn_Text}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.link_Text} >
            Have an account?
            <Text style={styles.link_Text2} onPress={() => navigation.navigate('Login')}> Login</Text>
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
  error: {
    color: 'red',
    marginBottom: 10,
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
  }

});

export default SignupScreen;
