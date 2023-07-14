import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
import FormInput from '../components/FormInput';
import api from '../utils/api';
import colors from '../styles/colors';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [role, setRoles] = useState([
    {name: 'Exhibitor', id: 1, isChecked: false},
    {name: 'Fabricators', id: 2, isChecked: false},
  ]);

  const handleRolePress = index => {
    const updatedRoles = role.map((roles, i) => {
      if (i === index) {
        return {...roles, isChecked: !roles.isChecked};
      } else {
        return {...roles, isChecked: false};
      }
    });

    setRoles(updatedRoles);
  };

  const handleSignup = async () => {
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Please Fill all Detail');
      return;
    }
    try {
      const response = await api.post('signup/', {
        email,
        password: {password: password, confirm_password: confirmPassword},
        role: role.find(r => r.isChecked)?.id || '',
      });
      console.log(response);
      // if (response.data.status) {
      //   navigation.navigate('Login');
      // }
      if (response.data.success === false) {
        Alert.alert('Error', response.data.message);
      } else {
        Alert.alert('Success', response.data.message, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assests/cloud.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <Text style={styles.header}>Sign up</Text>

        <Text style={{color: colors.red, textAlign: 'right'}}>{error}</Text>
        <FormInput
          textHeader={'Whats your email?'}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder={'Enter your email'}
        />
        <FormInput
          textHeader={'What is your password?'}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Enter your Password'}
          secureTextEntry={true}
        />
        <FormInput
          textHeader={'What s your Confirm Password?'}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          placeholder={'Enter your Confirm Password'}
          secureTextEntry={true}
        />

        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={role}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleRolePress(index)}
                style={[
                  styles.btns,
                  {
                    backgroundColor: item.isChecked
                      ? colors.orange
                      : colors.gray,
                  },
                ]}>
                <Text style={{textAlign: 'center', color: colors.white}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btn_Text}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.link_Text}>
            Have an account?
            <Text
              style={styles.link_Text2}
              onPress={() => {
                navigation.navigate('Login'),
                  setConfirmPassword(''),
                  setEmail('');
              }}>
              {' '}
              Login
            </Text>
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
  header: {
    textAlign: 'center',
    marginBottom: 10,
    color: colors.black,
    fontWeight: '400',
    fontSize: 30,
  },

  btn: {
    backgroundColor: colors.orange,
    width: '100%',
    padding: 10,
    borderRadius: 20,
  },
  btns: {
    backgroundColor: colors.gray,
    width: 170,
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    margin: 5,
  },
  btn_Text: {
    textAlign: 'center',
    color: colors.black,
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

export default SignupScreen;
