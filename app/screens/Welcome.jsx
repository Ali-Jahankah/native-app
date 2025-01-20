import { StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import AuthLayout from '../layouts/Auth';

const Welcome = ({ navigation }) => {
  return (
    <AuthLayout>
      <View style={styles.buttonsDiv}>
        <CustomButton
          text="Login"
          color="#3aa9e0"
          onClick={() => navigation.navigate('Login')}
        ></CustomButton>
        <CustomButton
          text="Register"
          color="#d2e03a"
          onClick={() => navigation.navigate('Register')}
        ></CustomButton>
      </View>
    </AuthLayout>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  buttonsDiv: {
    width: '80%',
    gap: 20,
    marginVertical: 30
  }
});
