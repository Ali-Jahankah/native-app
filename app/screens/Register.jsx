import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';
import CustomButton from '../components/CustomButton';
import AuthLayout from '../layouts/Auth';

const Register = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView style={styles.inputDiv} behavior="padding">
        <TextInput
          autoComplete="name"
          autoCorrect={false}
          placeholder="Username"
          placeholderTextColor="#bfffed"
          style={styles.input}
        ></TextInput>
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
        <CustomButton
          text="Register"
          color="#bfffed"
          onClick={() => navigation.navigate('Welcome')}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    gap: 20,
    width: '90%',
    marginBottom: 40
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
export default Register;
