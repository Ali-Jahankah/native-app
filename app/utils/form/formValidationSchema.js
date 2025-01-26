import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username field must not be empty')
    .min(4, 'Please inter minimum 4 characters.'),
  email: Yup.string()
    .required('email field must not be empty')
    .email('Email must be valid'),
  password: Yup.string()
    .required('Password field must not be empty')
    .min(8, 'Password must be more than 8 characters.')
});
