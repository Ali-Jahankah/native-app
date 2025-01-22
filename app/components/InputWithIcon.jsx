import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputWithIcon = ({
  iconName,
  iconColor,
  iconSize,
  autoComplete,
  autoCorrect,
  placeholder,
  keyboardType,
  placeholderTextColor,
  secureTextEntry,
  handler
}) => {
  return (
    <View style={styles.inputDiv}>
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        onChangeText={handler}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    width: '100%',
    flexDirection: 'row',
    gap: 16
  },
  icon: {
    alignSelf: 'center'
  },
  input: {
    color: 'white',
    borderColor: '#bfffed',
    borderRadius: 10,
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#ffffff18',
    flex: 1
  }
});
export default InputWithIcon;
