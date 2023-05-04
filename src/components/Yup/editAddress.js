import * as yup from 'yup';

export const editAddress = yup.object().shape({
  fullName: yup.string().required('Full Name is not null'),
  phone: yup.number().min(7).required('Iphone is not null'),
  road: yup.string().required('Road is not null'),
  wards: yup.string().required('Wards is not null'),
  town: yup.string().required('Town is not null'),
  city: yup.string().required('City is not null'),
  country: yup.string().required('Country is not null'),
});
