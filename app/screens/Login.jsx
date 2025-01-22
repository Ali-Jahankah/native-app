import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputWithIcon from '../components/InputWithIcon';
import AuthLayout from '../layouts/Auth';
const Login = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={styles.inputSection}
        behavior="padding"
        enabled
      >
        <InputWithIcon
          iconColor="#24e997ff"
          iconName="email"
          iconSize={30}
          autoComplete="email"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#bfffed"
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
          text="Login"
          onClick={() => navigation.navigate('Welcome')}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};
const styles = StyleSheet.create({
  inputSection: {
    width: '100%',
    gap: 20,
    flex: 0.5,
    width: '90%',
    margin: 'auto'
  }
});
export default Login;
