import React, { useState } from 'react';
import Notification from '../Home/Notification';
import Input from '../customs/Input';
import ButtonIO from './ButtonIO';
import { useEffect } from 'react';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { BiErrorAlt } from 'react-icons/bi';
import { getCookie, setCookie } from '../cookies/Cookies';
import { newPasswordSchemaEmail } from '../Yup/newPasswordSchema';

const NewPasswordEmail = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [messenger, setMessenger] = useState('');
  const [loading, setLoading] = useState(false);

  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: newPasswordSchemaEmail,
    onSubmit: (values, actions) => {
      setLoading(true);
      user.map((data) => {
        if (String(data.email) === String(values.email)) {
          setTimeout(() => {
            setCookie('email', values.email);
            setCookie('idPassword', data.id);
            navigate('/customer/account/newpassword');
            setLoading(false);
            actions.resetForm();
            setMessenger('');
          }, 2000);
        } else {
          setTimeout(() => {
            actions.resetForm();
            setLoading(false);
            setMessenger('Email không tồn tại xin hãy thử email khác.');
          }, 2000);
        }
      });
    },
  });
  return (
    <div>
      <Notification />
      <div className="flex justify-center ">
        <div className="w-[1290px]">
          <form className="w-[650px]" onSubmit={handleSubmit}>
            {messenger !== '' && (
              <div className="bg-red-200 h-[42px] flex items-center mt-[20px]">
                <BiErrorAlt className="text-[24px] ml-[20px] text-rose-900" />
                <p className=" ml-[20px] font-semibold text-rose-900   text-[13px] opacity-70">{messenger}</p>
              </div>
            )}
            <p className="font-black text-[28px] my-[30px]">QUÊN MẬT KHẨU</p>
            <p className="text-[15px] mb-[20px] ">
              Vui lòng nhập địa chỉ email của bạn dưới đây để nhận được một liên kết đặt lại mật khẩu.
            </p>
            <div className=" mb-[50px]">
              <Input
                id={'email'}
                errors={touched.email && errors.email}
                value={values.email}
                setonChange={handleChange}
                name="Email"
              />
              {touched.email && errors.email && <p className="text-[12px] text-red-500 mt-[8px]">{errors.email}</p>}
            </div>
            <div className="mb-[50px] flex items-center">
              <ButtonIO loading={loading} type="submit" name="Next" />
              <a
                href="/customer/account/login"
                className="font-[16px] ml-[30px] leading-[18px] text-blue-600 hover:border-b-[1px] cursor-pointer hover:border-blue-600"
              >
                Đăng nhập
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordEmail;
