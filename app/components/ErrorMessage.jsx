import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message, visible }) => {
  if (!message || !visible) {
    return null;
  }
  return <Text style={styles.text}>{message}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
});
export default ErrorMessage;
