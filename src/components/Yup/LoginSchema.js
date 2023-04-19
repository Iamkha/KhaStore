import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is not null'),
  password: yup.string().min(5).required('Password is not null'),
});
