import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputWithIcon from '../components/InputWithIcon';
import AuthLayout from '../layouts/Auth';
import { Formik } from 'formik';
const Register = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView style={styles.inputDiv} behavior="padding" enabled>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <InputWithIcon
                autoComplete="name"
                autoCorrect={false}
                placeholder="Username"
                placeholderTextColor="#bfffed"
                iconName="human"
                iconColor="#24e997ff"
                iconSize={30}
                handler={handleChange('username')}
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
                handler={handleChange('email')}
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
                handler={handleChange('password')}
              />
              <CustomButton text="Register" onClick={handleSubmit} />
            </>
          )}
        </Formik>
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
