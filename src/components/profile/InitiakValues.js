import React from 'react';

export const InitiakValues = ({ ...props }) => {
  const { data } = props;
  console.log(data, 'data');
  return {
    lastName: '',
    firtName: '',
    oldPassword: '',
    file: '',
    date: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
};
