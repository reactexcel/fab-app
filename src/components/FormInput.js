import React from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';

function FormInput({
  textHeader,
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View>
      <Text style={styles.label}>{textHeader}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  header: {
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
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  btn: {
    backgroundColor: 'orange',
    width: '100%',
    padding: 10,
    borderRadius: 20,
  },
  btns: {
    backgroundColor: 'gray',
    width: 170,
    height: 40,
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    margin: 5,
  },
  btn_Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  link_Text: {
    marginTop: 10,
    color: 'black',
    fontSize: 17,
  },
  link_Text2: {
    fontWeight: 'bold',
    color: 'orange',
  },
  error: {
    color: 'red',
    marginTop: -25,
    marginBottom: 20,
  },
});

export default FormInput;
