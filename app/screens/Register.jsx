import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputWithIcon from '../components/InputWithIcon';
import AuthLayout from '../layouts/Auth';
import { Formik } from 'formik';
import { validationSchema } from '../utils/formValidationSchema';
import ErrorMessage from '../components/ErrorMessage';

const Register = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView style={styles.inputDiv} behavior="padding" enabled>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched
          }) => (
            <>
              <InputWithIcon
                autoComplete="name"
                autoCorrect={false}
                placeholder="Username"
                placeholderTextColor="#bfffed"
                iconName="human"
                iconColor="#24e997ff"
                iconSize={30}
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched('username')}
              />
              {touched.username && (
                <ErrorMessage
                  message={errors.username}
                  visible={touched.username}
                />
              )}
              <InputWithIcon
                autoComplete="email"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#bfffed"
                iconColor="#24e997ff"
                iconSize={30}
                iconName="email"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && (
                <ErrorMessage message={errors.email} visible={touched.email} />
              )}
              <InputWithIcon
                autoComplete="password"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#bfffed"
                iconColor="#24e997ff"
                iconName="lock"
                iconSize={30}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && (
                <ErrorMessage
                  message={errors.password}
                  visible={touched.password}
                />
              )}
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
