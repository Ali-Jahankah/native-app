import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputWithIcon from '../components/InputWithIcon';
import AuthLayout from '../layouts/Auth';
import { Formik } from 'formik';
import { validationSchema } from '../utils/form/formValidationSchema';
import ErrorMessage from '../components/ErrorMessage';
import { formConfig } from '../utils/form/formConfig';

const Register = ({ navigation }) => {
  return (
    <AuthLayout>
      <KeyboardAvoidingView style={styles.inputDiv} behavior="padding" enabled>
        <Formik
          initialValues={formConfig.register.formik.initialValues}
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
            <View style={styles.formContainer}>
              {formConfig.register.inputs.map(
                (input) => (
                  console.log(errors[input.name]),
                  (
                    <React.Fragment key={input.name}>
                      <InputWithIcon
                        {...input}
                        onChangeText={() => handleChange(input.name)}
                        onBlur={() => setFieldTouched(input.name)}
                      />
                      {touched[input.name] && (
                        <ErrorMessage
                          message={errors[input.name]}
                          visible={touched[input.name]}
                        />
                      )}
                    </React.Fragment>
                  )
                )
              )}
              <CustomButton text="Register" onClick={handleSubmit} />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 20,
    width: '90%',
    margin: 'auto'
  },
  inputDiv: {
    width: '100%',
    flexDirection: 'row',
    gap: 16
  }
});

export default Register;
