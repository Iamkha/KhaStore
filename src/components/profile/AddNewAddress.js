import React from 'react';
import SidebarAccount from './SidebarAccount';
import { useFormik } from 'formik';
import Input from '../customs/Input';
import { editAddress } from '../Yup/editAddress';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getCookie } from '../cookies/Cookies';
import ButtonIO from '../LoginLogOut/ButtonIO';
import { BiCheckCircle } from 'react-icons/bi';

const AddNewAddress = () => {
  const [user, setUser] = useState([]);

  const [messenger, setMessenger] = useState('');
  const [loading, setLoading] = useState(false);
  const usersCollectionRef = collection(db, 'users');
  const cookiesUser = getCookie('userId');

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      data.docs.map((doc) => {
        if (doc.id === cookiesUser) {
          setFieldValue('fullName', doc.data().defaultBillingAddress.fullName);
          setFieldValue('phone', doc.data().defaultBillingAddress.phone);
          setFieldValue('road', doc.data().defaultBillingAddress.road);
          setFieldValue('wards', doc.data().defaultBillingAddress.wards);
          setFieldValue('town', doc.data().defaultBillingAddress.town);
          setFieldValue('country', doc.data().defaultBillingAddress.country);
          setFieldValue('city', doc.data().defaultBillingAddress.city);
        }
      });
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(user);
  const { values, setFieldValue, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      road: '',
      wards: '',
      town: '',
      country: '',
      city: '',
    },
    validationSchema: editAddress,
    onSubmit: (values, actions) => {
      console.log(values);
      setLoading(true);

      setTimeout(() => {
        actions.resetForm();
        setMessenger('Bạn đã thay đổi địa chỉ thành công! ');
        setLoading(false);
        const userDoc = doc(db, 'users', cookiesUser);
        updateDoc(userDoc, {
          defaultBillingAddress: {
            fullName: values.fullName,
            phone: values.phone,
            road: values.road,
            wards: values.wards,
            town: values.town,
            country: values.country,
            city: values.city,
          },
        });
      }, 2000);
    },
  });

  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="Address Book"> </SidebarAccount>

        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">Edit Address Book</h1>
          {messenger !== '' && (
            <div className="bg-green-100 h-[42px] flex items-center mt-[20px]">
              <BiCheckCircle className="text-[24px] ml-[20px] text-green-500" />
              <p className=" ml-[20px] font-semibold text-green-900   text-[13px] opacity-70">{messenger}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex justify-between w-full ">
              <div className="w-[48%] h-auto">
                <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
                  <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Contact Information</p>
                </div>
                <Input
                  id={'fullName'}
                  errors={touched.fullName && errors.fullName}
                  value={values.fullName}
                  setonChange={handleChange}
                  name="Tên đầy đủ"
                />
                {touched.fullName && errors.fullName && (
                  <p className="text-[12px] text-red-500 mt-[8px]">{errors.fullName}</p>
                )}

                <div className="mt-[10px]">
                  <Input
                    id={'phone'}
                    errors={touched.phone && errors.phone}
                    value={values.phone}
                    setonChange={handleChange}
                    name="Số điện thoại"
                  />
                  {touched.phone && errors.phone && <p className="text-[12px] text-red-500 mt-[8px]">{errors.phone}</p>}
                </div>
              </div>
              <div className="w-[48%]">
                <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
                  <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Address</p>
                </div>
                <Input
                  id={'road'}
                  errors={touched.road && errors.road}
                  value={values.road}
                  setonChange={handleChange}
                  name="Đường"
                />
                {touched.road && errors.road && <p className="text-[12px] text-red-500 mt-[8px]">{errors.road}</p>}
                <div className="mt-[10px]">
                  <Input
                    id={'wards'}
                    errors={touched.wards && errors.wards}
                    value={values.wards}
                    setonChange={handleChange}
                    name="Phường/Xã"
                  />
                  {touched.wards && errors.wards && <p className="text-[12px] text-red-500 mt-[8px]">{errors.wards}</p>}
                </div>
                <div className="mt-[10px]">
                  <Input
                    id={'town'}
                    errors={touched.town && errors.town}
                    value={values.town}
                    setonChange={handleChange}
                    name="Thị trấn"
                  />
                  {touched.town && errors.town && <p className="text-[12px] text-red-500 mt-[8px]">{errors.town}</p>}
                </div>

                <div className="mt-[10px]">
                  <Input
                    id={'city'}
                    errors={touched.city && errors.city}
                    value={values.city}
                    setonChange={handleChange}
                    name="Thành Phố"
                  />
                  {touched.city && errors.city && <p className="text-[12px] text-red-500 mt-[8px]">{errors.city}</p>}
                </div>
                <div className="mt-[10px]">
                  <Input
                    id={'country'}
                    errors={touched.country && errors.country}
                    value={values.country}
                    setonChange={handleChange}
                    name="Đất nước"
                  />
                  {touched.country && errors.country && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.country}</p>
                  )}
                </div>
              </div>
            </div>

            <ButtonIO loading={loading} type="submit" name=" Save Address" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
