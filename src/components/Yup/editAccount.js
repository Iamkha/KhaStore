import * as yup from 'yup';

export const editAccount = yup.object().shape({
  firtName: yup.string().required('Firt Name is not null'),
  lastName: yup.string().required('Last Name is not null'),
  date: yup.string().required('Date is not null'),
  gender: yup.string().required('Gender is not null'),
  email: yup.string().email('Please enter a valid email').required('Email is not null'),
  oldPassword: yup.string().min(5).required('Old password is not null'),
  password: yup.string().min(5).required('Password is not null'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is not null'),
});
