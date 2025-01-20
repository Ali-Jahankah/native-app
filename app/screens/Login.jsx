import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AuthLayout from '../layouts/Auth';

const Login = () => {
  return (
    <AuthLayout>
      <View style={styles.inputDiv}>
        <TextInput
          autoComplete="email"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#bfffed"
          style={styles.input}
        ></TextInput>
        <TextInput
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#bfffed"
          style={styles.input}
        ></TextInput>
      </View>
    </AuthLayout>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    width: '100%',
    gap: 20,
    flex: 0.5,
    width: '90%'
  },
  input: {
    color: 'white',
    borderColor: '#bfffed',
    borderRadius: 10,
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#ffffff18'
  }
});
export default Login;
