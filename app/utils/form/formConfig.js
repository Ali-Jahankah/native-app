export const formConfig = {
  register: {
    inputs: [
      {
        name: 'username',
        autoComplete: 'name',
        autoCorrect: false,
        placeholder: 'Username',
        placeholderTextColor: '#bfffed',
        iconName: 'human',
        iconColor: '#24e997ff',
        iconSize: 30
      },
      {
        name: 'email',
        autoComplete: 'email',
        autoCorrect: false,
        placeholder: 'Email',
        keyboardType: 'email-address',
        placeholderTextColor: '#bfffed',
        iconColor: '#24e997ff',
        iconSize: 30,
        iconName: 'email'
      },
      {
        name: 'password',
        autoComplete: 'password',
        autoCorrect: false,
        secureTextEntry: true,
        placeholder: 'Password',
        placeholderTextColor: '#bfffed',
        iconColor: '#24e997ff',
        iconName: 'lock',
        iconSize: 30
      }
    ],
    formik: {
      initialValues: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  login: {}
};
