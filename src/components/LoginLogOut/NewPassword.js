import React, { useState } from 'react';
import Notification from '../Home/Notification';
import Input from '../customs/Input';
import ButtonIO from './ButtonIO';
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { BiErrorAlt } from 'react-icons/bi';
import { getCookie, setCookie } from '../cookies/Cookies';
import { newPasswordSchema } from '../Yup/newPasswordSchema';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPassword } from '../features/newPasswordSlice';

const NewPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: newPasswordSchema,
    onSubmit: (values, actions) => {
      setLoading(true);
      setTimeout(() => {
        const action = addNewPassword({ name: 'Bạn đã đổi mật khẩu thành công.', id: 1 });
        dispatch(action);
        setCookie('email', values.email);
        navigate('/customer/account/login');
        setLoading(false);
        actions.resetForm();
        const UserId = getCookie('idPassword');
        const userDoc = doc(db, 'users', UserId);
        updateDoc(userDoc, { password: values.newPassword });
      }, 2000);
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
            <p className="font-black text-[28px] my-[30px]">MẬT KHẨU MỚI</p>
            <p className="text-[15px] mb-[20px] ">Vui lòng nhập mật khẩu mới.</p>
            <div className=" mb-[20px]">
              <Input
                id={'newPassword'}
                errors={touched.newPassword && errors.newPassword}
                value={values.newPassword}
                setonChange={handleChange}
                name="Mật khẩu mới"
              />
              {touched.newPassword && errors.newPassword && (
                <p className="text-[12px] text-red-500 mt-[8px]">{errors.newPassword}</p>
              )}
            </div>
            <div className=" mb-[50px]">
              <Input
                id={'confirmNewPassword'}
                errors={touched.confirmNewPassword && errors.confirmNewPassword}
                value={values.confirmNewPassword}
                setonChange={handleChange}
                name="Nhập lại mật khẩu"
              />
              {touched.confirmNewPassword && errors.confirmNewPassword && (
                <p className="text-[12px] text-red-500 mt-[8px]">{errors.confirmNewPassword}</p>
              )}
            </div>
            <div className="mb-[50px] flex items-center">
              <ButtonIO loading={loading} type="submit" name="Thay đổi" />
              <a
                href="/customer/account/forgotpassword"
                className="font-[16px] ml-[30px] leading-[18px] text-blue-600 hover:border-b-[1px] cursor-pointer hover:border-blue-600"
              >
                Quay lại
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
