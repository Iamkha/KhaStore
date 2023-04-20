import * as yup from 'yup';

export const newPasswordSchemaEmail = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is not null'),
});

export const newPasswordSchema = yup.object().shape({
  newPassword: yup.string().min(5).required('Password is not null'),
  confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});
