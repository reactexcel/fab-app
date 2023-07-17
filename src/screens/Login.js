import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import FormInput from '../components/FormInput';
import api from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const setAccessToken = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill all fields.');
      return;
    }
    // login api
    try {
      const response = await api.post('signin/', {
        email,
        password,
      });
      console.log(response);
      if (response.data.success === false) {
        Alert.alert('Error', response.data.message);
      } else {
        Alert.alert('Success', response.data.message, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Drawer'),
          },
        ]);
        setAccessToken(response.data.token.access);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assests/cloud.png')}
          style={{height: 200, width: 200}}
        />
      </View>

      <Text style={styles.header}>Login</Text>
      <Text style={{color: colors.red, textAlign: 'right'}}>{error}</Text>
      <FormInput
        textHeader={'Enter your email'}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your Email"
      />
      <FormInput
        textHeader={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your Password"
        secureTextEntry={true}
      />

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={styles.btn_Text}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link_Text}>
          Don't have an account?{' '}
          <Text
            style={styles.link_Text2}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Signup
          </Text>
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
    marginBottom: 50,
    color: 'black',
    fontWeight: '400',
    fontSize: 30,
  },

  btn: {
    backgroundColor: colors.orange,
    width: '100%',
    padding: 10,
    borderRadius: 20,
  },

  btn_Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  link_Text: {
    marginTop: 10,
    color: colors.black,
    fontSize: 17,
  },
  link_Text2: {
    fontWeight: 'bold',
    color: colors.orange,
  },
  error: {
    color: colors.red,
    marginTop: -25,
    marginBottom: 20,
  },
});

export default LoginScreen;
