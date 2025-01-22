import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputWithIcon from '../components/InputWithIcon';
import AuthLayout from '../layouts/Auth';

const Register = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView style={styles.inputDiv} behavior="padding">
        <InputWithIcon
          autoComplete="name"
          autoCorrect={false}
          placeholder="Username"
          placeholderTextColor="#bfffed"
          iconName="human"
          iconColor="#24e997ff"
          iconSize={30}
        />
        <InputWithIcon
          autoComplete="email"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#bfffed"
          iconColor="#24e997ff"
          iconSize={30}
          iconName="email"
        />

        <InputWithIcon
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#bfffed"
          iconColor="#24e997ff"
          iconName="lock"
          iconSize={30}
        />
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
    margin: 'auto'
  }
});
export default Register;
