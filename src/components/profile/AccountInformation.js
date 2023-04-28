import React, { useEffect } from 'react';
import { useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase';
import { addRegister } from '../features/registerSlice';
import CheckInput from '../customs/CheckInput';
import ButtonIO from '../LoginLogOut/ButtonIO';
import Input from '../customs/Input';
import SidebarAccount from './SidebarAccount';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { editAccount } from '../Yup/editAccount';
import { getCookie } from '../cookies/Cookies';

const AccountInformation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [allowRemote, setAllowRemote] = useState(false);
  const [registerReceiveNewsletter, setRegisterReceiveNewsletter] = useState(false);
  const [user, setUser] = useState([]);
  const [messenger, setMessenger] = useState('đas');
  const [loading, setLoading] = useState(false);

  const usersCollectionRef = collection(db, 'users');
  const cookiesUser = getCookie('userId');

  console.log(user);
  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const { setFieldValue, values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      lastName: 'kha',
      firtName: '',
      oldPassword: '',
      file: '',
      date: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: editAccount,
    onSubmit: (values, actions) => {
      setLoading(true);
      const checkUser = user.map((data) => String(data.email) === String(values.email));

      setTimeout(() => {
        if (checkUser.includes(true)) {
          setRegisterReceiveNewsletter(false);
          setShowPassword(false);
          setAllowRemote(false);
          actions.resetForm();
          setLoading(false);
          setMessenger('Email đã tồn tại xin hãy thử email khác.');
        } else {
          const action = addRegister({ name: 'Bạn đã đăng kí tài khoản thành công.', id: 1 });
          dispatch(action);
          // const actionUser = addUserSlide({
          //   date: values.date,
          //   email: values.email,
          //   url: values.url,
          //   id: uuidv4(),
          //   firtName: values.firtName,
          //   lastName: values.lastName,
          //   gender: values.gender,
          //   password: values.password,
          //   registerReceiveNewsletter: registerReceiveNewsletter,
          //   allowRemote: allowRemote,
          // });
          // dispatch(actionUser);
          setRegisterReceiveNewsletter(false);
          setShowPassword(false);
          setAllowRemote(false);
          setLoading(false);
          actions.resetForm();
          setMessenger('');
        }
      }, 2000);
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
      <div className="w-full flex justify-center mt-[50px] ">
        <div className="w-[1290px] flex justify-between">
          <SidebarAccount title="Account Information"></SidebarAccount>

          <div className="w-full pl-[20px]  mb-[100px]">
            <h1 className="text-[40px] font-light mb-[30px]">Edit Account Information</h1>
            {messenger !== '' && (
              <div className="bg-red-200 h-[42px] flex items-center mt-[20px]">
                <BiErrorAlt className="text-[24px] ml-[20px] text-rose-900" />
                <p className=" ml-[20px] font-semibold text-rose-900   text-[13px] opacity-70">{messenger}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <div className="w-[48%]">
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
                    <input value={'dasdsa'} />
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
                  <div className="mt-7">
                    <p className="mb-[10px]">Ảnh đại diện:</p>
                    <div className="border-Gray group overflow-hidden  flex h-[220px]  w-[220px] cursor-pointer flex-col items-center justify-center rounded-full border-2 border-dotted">
                      {!values.file ? (
                        <>
                          <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center ">
                            <div className="w-ful flex h-full flex-col items-center justify-center gap-2">
                              <MdCloudUpload className="text-Gray hover:text-textColor text-3xl" />
                              <p className="text-Gray hover:text-textColor">Click here to upload</p>
                            </div>
                            <input
                              name="file"
                              placeholder="Enter your file..."
                              type={'file'}
                              className="h-0 w-0"
                              onChange={(e) => {
                                if (e.target.files != null) {
                                  setFieldValue('file', URL.createObjectURL(e.target.files[0]));
                                }
                              }}
                            />
                          </label>
                        </>
                      ) : (
                        <>
                          <div className="relative h-full">
                            <img src={values.file} alt="uploadimage" className="h-full w-full object-cover" />
                            <button
                              className="bg-cartNumBg mr-[32px] border-[1px] border-black mb-[12px] bg-white rounded-full absolute bottom-3 right-3 cursor-pointer  p-1 text-xl outline-none transition-all duration-500 ease-in-out hover:shadow-md"
                              onClick={() => setFieldValue('file', '')}
                            >
                              <MdDelete className="text-red-900  " />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {errors.file && touched.file && (
                    <p className="absolute w-full text-center text-red-600 ">{errors.file}</p>
                  )}
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
                </div>
                <div className="w-[48%]">
                  <p className="text-[22px] py-[5px] my-[15px] border-b-[1px]">Thông tin đăng nhập</p>
                  <div className="mt-[20px]">
                    <Input
                      id={'email'}
                      errors={touched.email && errors.email}
                      value={values.email}
                      setonChange={handleChange}
                      name="Email"
                    />

                    {touched.email && errors.email && (
                      <p className="text-[12px] text-red-500 mt-[8px]">{errors.email}</p>
                    )}
                  </div>
                  <div className=" mt-[20px]">
                    <Input
                      id={'oldPassword'}
                      value={values.oldPassword}
                      setonChange={handleChange}
                      showPassword={showPassword}
                      name="Mật Khẩu Cũ"
                      errors={touched.oldPassword && errors.oldPassword}
                    />
                    {touched.oldPassword && errors.oldPassword && (
                      <p className="text-[12px] text-red-500 mt-[8px]">{errors.oldPassword}</p>
                    )}
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
                  </div>
                </div>
              </div>
              <ButtonIO loading={loading} type="submit" name="Lưu" />
            </form>
            {values.url}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
