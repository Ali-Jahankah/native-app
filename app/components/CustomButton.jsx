import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
const CustomButton = ({ color, text, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ ...styles.button, backgroundColor: color }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center'
  }
});
export default CustomButton;
