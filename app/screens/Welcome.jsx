import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../components/CustomButton';

const Welcome = () => {
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
      <View style={styles.buttonsDiv}>
        <CustomButton
          text="Login"
          color="#3aa9e0"
          onClick={() => console.log('Login')}
        ></CustomButton>
        <CustomButton
          text="Register"
          color="#d2e03a"
          onClick={() => console.log('Register')}
        ></CustomButton>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: 500,
    color: '#bfffed'
  },
  logo: {
    width: 300,
    height: 200
  },
  buttonsDiv: {
    width: '80%',
    gap: 20,
    marginVertical: 30
  },
  titleDiv: { marginVertical: 'auto' }
});
