import React, { useState } from 'react';
import Notification from '../Home/Notification';
import Input from '../customs/Input';
import CheckInput from '../customs/CheckInput';
import ButtonIO from './ButtonIO';
import { useEffect } from 'react';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useFormik } from 'formik';
import { loginSchema } from '../Yup/LoginSchema';
import { useNavigate } from 'react-router-dom';
import { BiCheckCircle, BiErrorAlt } from 'react-icons/bi';
import { getCookie, setCookie } from '../cookies/Cookies';
import { useDispatch, useSelector } from 'react-redux';
import { removeNewPassword } from '../features/newPasswordSlice';
import { removeRegister } from '../features/registerSlice';
import { removeUserSlide } from '../features/addUserSlide';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const messengerNewPassword = useSelector((state) => state.newPasswords);
  const messengerNewRegister = useSelector((state) => state.newRegister);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const [messenger, setMessenger] = useState('');
  const [messengerNewPasswordUser, setMessengerNewPasswordUser] = useState(messengerNewPassword[0]?.name);
  const [register, setRegister] = useState(messengerNewRegister[0]?.name);

  const [loading, setLoading] = useState(false);
  const { values, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      const action = removeNewPassword({ id: 1 });
      dispatch(action);
      const actionR = removeRegister({ id: 1 });
      dispatch(actionR);
      const actionU = removeUserSlide();
      dispatch(actionU);
      setLoading(true);
      user.map((data) => {
        if (data.email === values.email && data.password === values.password) {
          setTimeout(() => {
            setCookie('userId', data.id);
            navigate('/');
            setLoading(false);
            actions.resetForm();
            setMessenger('');
          }, 2000);
        } else {
          setTimeout(() => {
            actions.resetForm();
            setLoading(false);
            setMessengerNewPasswordUser(undefined);
            setRegister(undefined);
            setMessenger(
              'Tài khoản đăng nhập không chính xác hoặc tạm thời bị vô hiệu hóa. Vui lòng đợi và thử lại sau.',
            );
          }, 2000);
        }
      });
    },
  });

  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const onChangePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Notification />
      <div className="flex justify-center ">
        <div className="xl:w-[1250px] w-full mb-[100px]">
          {messenger !== '' && (
            <div className="bg-red-200 h-[42px] flex items-center mt-[20px]">
              <BiErrorAlt className="text-[24px] ml-[20px] text-rose-900" />
              <p className=" ml-[20px] font-semibold text-rose-900   text-[13px] opacity-70">{messenger}</p>
            </div>
          )}

          {messengerNewPasswordUser !== undefined && (
            <div className="bg-green-100 h-[42px] flex items-center mt-[20px]">
              <BiCheckCircle className="text-[24px] ml-[20px] text-green-500" />
              <p className=" ml-[20px] font-semibold text-green-900   text-[13px] opacity-70">
                {messengerNewPasswordUser}
              </p>
            </div>
          )}
          {register !== undefined && (
            <div className="bg-green-100 h-[42px] flex items-center mt-[20px]">
              <BiCheckCircle className="text-[24px] ml-[20px] text-green-500" />
              <p className=" ml-[20px] font-semibold text-green-900   text-[13px] opacity-70">{register}</p>
            </div>
          )}
          <p className="font-black text-[28px] my-[30px] px-[20px]">TÀI KHOẢN</p>
          <div className="flex justify-between px-[20px] ">
            <form className="w-[48%] " onSubmit={handleSubmit}>
              <p className="text-[12px] py-[12px] my-[15px] border-b-[1px]">Khách hàng đã đăng ký tài khoản</p>
              <p className="text-[15px]">Bạn đã có tài khoản, xin mời đăng nhập bằng địa chỉ email đăng ký.</p>
              <div className="w-[350px] mt-[20px]">
                <Input
                  id={'email'}
                  errors={touched.email && errors.email}
                  value={values.email}
                  setonChange={handleChange}
                  name="Email"
                />

                {touched.email && errors.email && <p className="text-[12px] text-red-500 mt-[8px]">{errors.email}</p>}
              </div>
              <div className="w-[350px] mt-[20px]">
                <Input
                  id={'password'}
                  value={values.password}
                  setonChange={handleChange}
                  showPassword={showPassword}
                  name="Mật Khẩu"
                  errors={touched.password && errors.password}
                />
                {touched.password && errors.password && (
                  <p className="text-[12px] text-red-500 mt-[8px]">{errors.password}</p>
                )}
              </div>
              <div className="my-[20px]">
                <CheckInput
                  onChange={onChangePassword}
                  showPassword={showPassword}
                  title="Hiển thị mật khẩu"
                  id="passwordCheck"
                />
              </div>
              <div>
                <ButtonIO loading={loading} name="Đăng nhập" />
                <a
                  href="/customer/account/forgotpassword"
                  className="font-[16px] text-blue-600 hover:border-b-[1px] cursor-pointer hover:border-blue-600 ml-[10px]"
                >
                  Quên mật khẩu
                </a>
              </div>
            </form>
            <div className="w-[48%]">
              <p className="text-[12px] py-[12px] my-[15px] border-b-[1px]">Khách hàng mới</p>
              <a href="/customer/account/create">
                <ButtonIO name="Đăng ký" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
