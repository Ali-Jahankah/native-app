import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
const AuthLayout = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/forest.jpg')}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.titleDiv}>
        <Image
          source={require('../assets/uaral.png')}
          style={styles.logo}
        ></Image>
        <Text style={styles.text}>Full-Stack Native App</Text>
      </View>
      {children}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleDiv: {
    marginVertical: 'auto',
    flex: 0.5
  },
  logo: {
    width: 250,
    height: 150,
    marginHorizontal: 'auto'
  },
  text: {
    fontSize: 32,
    fontWeight: 500,
    color: '#bfffed'
  }
});

export default AuthLayout;
