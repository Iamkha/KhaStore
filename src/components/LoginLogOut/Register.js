import React from 'react';
import { useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import Input from '../customs/Input';
import CheckInput from '../customs/CheckInput';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import ButtonIO from './ButtonIO';
import { registerSchema } from '../Yup/registerSchema';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../../firebase';
import Notification from '../Home/Notification';

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [allowRemote, setAllowRemote] = useState(false);
  const [registerReceiveNewsletter, setRegisterReceiveNewsletter] = useState(false);
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
      lastName: '',
      firtName: '',
      date: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      setLoading(true);
      user.map((data) => {
        if (String(data.email) === String(values.email)) {
          setTimeout(() => {
            setRegisterReceiveNewsletter(false);
            setShowPassword(false);
            setAllowRemote(false);
            actions.resetForm();
            setLoading(false);
            setMessenger('Email đã tồn tại xin hãy thử email khác.');
          }, 2000);
        } else {
          setTimeout(() => {
            setRegisterReceiveNewsletter(false);
            setShowPassword(false);
            setAllowRemote(false);
            addDoc(usersCollectionRef, {
              date: values.date,
              email: values.email,
              firtName: values.firtName,
              lastName: values.lastName,
              gender: values.gender,
              password: values.password,
              registerReceiveNewsletter: registerReceiveNewsletter,
              allowRemote: allowRemote,
            });
            navigate('/customer/account/login');
            setLoading(false);
            actions.resetForm();
            setMessenger('');
          }, 2000);
        }
      });
    },
  });

  const onChangePassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangeAllowRemote = () => {
    setAllowRemote(!allowRemote);
  };
  const onChangeRegisterReceiveNewsletter = () => {
    setRegisterReceiveNewsletter(!registerReceiveNewsletter);
  };
  return (
    <div>
      <Notification />
      <div className=" flex justify-center ">
        <div className="w-[1290px]">
          <form className="w-[650px]" onSubmit={handleSubmit}>
            {messenger !== '' && (
              <div className="bg-red-200 h-[42px] flex items-center mt-[20px]">
                <BiErrorAlt className="text-[24px] ml-[20px] text-rose-900" />
                <p className=" ml-[20px] font-semibold text-rose-900   text-[13px] opacity-70">{messenger}</p>
              </div>
            )}
            <p className="font-black text-[28px] my-[30px]">TẠO TÀI KHOẢN MỚI</p>
            <p className="text-[22px] py-[5px] my-[15px] border-b-[1px]">Thông tin khách hàng</p>
            <Input
              id={'firtName'}
              errors={touched.firtName && errors.firtName}
              value={values.firtName}
              setonChange={handleChange}
              name="Tên"
            />
            {touched.firtName && errors.firtName && (
              <p className="text-[12px] text-red-500 mt-[8px]">{errors.firtName}</p>
            )}

            <div className="mt-[20px]">
              <Input
                id={'lastName'}
                errors={touched.lastName && errors.lastName}
                value={values.lastName}
                setonChange={handleChange}
                name="Họ"
              />
              {touched.lastName && errors.lastName && (
                <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
              )}
            </div>

            <div className="my-[20px]">
              <CheckInput
                onChange={onChangeRegisterReceiveNewsletter}
                showPassword={registerReceiveNewsletter}
                title="Đăng ký nhận bản tin "
                id="registerReceiveNewsletter"
              />
            </div>
            <div className="mt-[20px]">
              <p className="font-[15px]">Date of Birth</p>
              <input
                className={
                  touched.date && errors.date
                    ? 'border border-solid text-[14px] h-[32px] outline-none   border-red-600 focus:border-solid-[1.5px] w-full px-[10px]  '
                    : 'border border-solid text-[14px] h-[32px] outline-none focus:border-cyan-600 focus:border-solid-[1.5px] w-full px-[10px] '
                }
                id="date"
                type="date"
                onChange={handleChange}
                value={values.date}
              />
              {touched.lastName && errors.lastName && (
                <p className="text-[12px]  text-red-500 mt-[8px]">{errors.lastName}</p>
              )}
            </div>
            <div className="mt-[20px]">
              <p className="font-[15px]">Date of Birth</p>

              <select
                id={'gender'}
                value={values.gender}
                onChange={handleChange}
                className={
                  touched.gender && errors.gender
                    ? 'border border-solid cursor-pointer text-[14px] h-[32px] outline-none   border-red-600 focus:border-solid-[1.5px] w-full px-[10px]  '
                    : 'border border-solid cursor-pointer  text-[14px] h-[32px] outline-none focus:border-cyan-600 focus:border-solid-[1.5px] w-full px-[10px] '
                }
                name="gender"
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not Specified">Not Specified</option>
              </select>
              {touched.date && errors.date && <p className="text-[12px]  text-red-500 mt-[8px]">{errors.date}</p>}
            </div>

            <div className="my-[20px]">
              <CheckInput
                onChange={onChangeAllowRemote}
                showPassword={allowRemote}
                title="Allow remote shopping assistance "
                id="allowRemote"
              />
            </div>
            <p className="text-[22px] py-[5px] my-[15px] border-b-[1px]">Thông tin đăng nhập</p>
            <div className="mt-[20px]">
              <Input
                id={'email'}
                errors={touched.email && errors.email}
                value={values.email}
                setonChange={handleChange}
                name="Email"
              />

              {touched.email && errors.email && <p className="text-[12px] text-red-500 mt-[8px]">{errors.email}</p>}
            </div>
            <div className=" mt-[20px]">
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
            <div className=" mt-[20px]">
              <Input
                id={'confirmPassword'}
                value={values.confirmPassword}
                setonChange={handleChange}
                showPassword={showPassword}
                name="Nhập lại mật khẩu"
                errors={touched.confirmPassword && errors.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-[12px] text-red-500 mt-[8px]">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="my-[20px]">
              <CheckInput
                onChange={onChangePassword}
                showPassword={showPassword}
                title="Hiển thị mật khẩu"
                id="passwordCheck"
              />

              <div className="mt-[20px] flex items-center">
                <ButtonIO loading={loading} type="submit" name="Đăng ký" />
                <a
                  href="/customer/account/login"
                  className="font-[16px] ml-[30px] leading-[17px] text-blue-600 hover:border-b-[1px] cursor-pointer hover:border-blue-600"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
