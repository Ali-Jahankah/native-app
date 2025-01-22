import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
const CustomButton = ({ text, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    borderBottomColor: '#ff3300',
    borderTopColor: '#77ff00',
    borderTopWidth: 3,
    borderBottomWidth: 3,

    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#00000072'
  },
  text: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    color: 'white'
  }
});
export default CustomButton;
