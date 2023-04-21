import React, { useEffect, useState } from 'react';
import Logo from '../../images/Logo.png';
import { FaRegUserCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';
import './Header.css';
import { dataMale, dataFemale, dataChildren, dataCollection } from '../data/fakeData';
import MenuHeader from './MenuHeader';
import { getCookie, setCookie } from '../cookies/Cookies';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { AiOutlineSetting } from 'react-icons/ai';

const Header = () => {
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState(undefined);
  const [user, setUser] = useState([]);
  const [openUser, SetOnpenUser] = useState(false);

  const usersCollectionRef = collection(db, 'users');

  const cookiesUser = getCookie('userId');

  useEffect(() => {
    setUserId(cookiesUser);
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [userId]);

  console.log(typeof cookiesUser);
  const dataUser = user.filter((data) => data.id === cookiesUser);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    setValue('');
  };

  const handleUser = () => {
    if (cookiesUser === undefined) {
      alert('Bạn đã đăng nhập rồi nhé!');
    } else {
      navigate('/customer/account/login');
    }
  };
  const handleUserProFile = () => {
    SetOnpenUser(!openUser);
  };

  const handleLogOutUser = () => {
    navigate('/customer/account/login');
    setCookie('userId', undefined);
    setUserId(undefined);
    SetOnpenUser(false);
  };
  return (
    <div className="  w-full  flex justify-center  z-50 h-[76px] top-0 bg-white sticky items-center shadow-sm">
      <div className="relative w-screen flex justify-center">
        <div className="flex justify-between items-center  h-[76px] w-[1290px]">
          <div className="flex  justify-between items-center w-[550px]">
            <a href="/">
              <img className="h-[46px] w-auto object-cover bg-white cursor-pointer rounded-lg" src={Logo} />
            </a>
            <div className=" flex  ">
              <div className=" name  text-[17px] cursor-pointer mx-[16px]  leading-[25px] my-[5px]  hover:border-b-[1px] hover:border-fuchsia-700 hover:text-fuchsia-700 ">
                <a href="/nam" className="font-normal  name  uppercase     ">
                  Nam
                </a>
                <div className="absolute  Menu w-full right-3">
                  <div className="ml-[11px]    mt-[25px] w-full  ">
                    <div className="menuchidlren bg-white shadow-2xl   flex justify-center ">
                      <div className="flex justify-between   w-[76.7%]">
                        <MenuHeader data={dataMale} name="Đồ lót" />
                        <MenuHeader data={dataMale} name="Quần áo" />
                        <MenuHeader data={dataMale} name="Bít tất (vớ)" />
                        <MenuHeader data={dataMale} name="Sản phẩm đặc biệt" />
                        <img src="https://onoff.vn/media/import/banneronoff/Web/Menu/menu-d-nam-1.jpg" alt="anh" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className=" name  text-[17px] cursor-pointer mx-[16px]  my-[5px] leading-[26px]  hover:border-b-[1px] hover:border-fuchsia-700 hover:text-fuchsia-700 ">
                <span className="font-normal   uppercase  ">Nữ</span>
                <div className="absolute Menu  w-full right-[11px]">
                  <div className="ml-[11px]  mt-[25px] w-full ">
                    <div className="menuchidlren bg-white menu shadow-2xl   flex justify-center ">
                      <div className="flex justify-between  w-[1320px]">
                        <MenuHeader data={dataFemale} name="Đồ lót" />
                        <MenuHeader data={dataFemale} name="Quần áo" />
                        <MenuHeader data={dataFemale} name="Bít tất (vớ)" />
                        <MenuHeader data={dataFemale} name="Sản phẩm đặc biệt" />
                        <img src="https://onoff.vn/media/import/banneronoff/Web/Menu/menu-d-nu-1.jpg" alt="anh" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className=" name  text-[17px] cursor-pointer mx-[16px] leading-[25px]  my-[5px]  hover:border-b-[1px] hover:border-fuchsia-700 hover:text-fuchsia-700 ">
                <span className="font-normal   uppercase  ">Trẻ em</span>
                <div className="absolute Menu  w-full right-[11px]">
                  <div className="ml-[11px]  mt-[25px] w-full ">
                    <div className="menuchidlren bg-white  shadow-md  flex justify-center ">
                      <div className="flex justify-between  w-[1320px]">
                        <MenuHeader data={dataChildren} name="Bé trai" />
                        <MenuHeader data={dataChildren} name="Bé gái" />
                        <MenuHeader data={dataChildren} name="Trẻ sơ sinh" />
                        <MenuHeader data={dataChildren} name="Sản phẩm đặc biệt" />
                        <img src="https://onoff.vn/media/import/banneronoff/Web/Menu/menu-d-treem-1.jpg" alt="anh" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className=" name  text-[17px] cursor-pointer mx-[16px]  my-[5px] leading-[25px] hover:border-b-[1px] hover:border-fuchsia-700 hover:text-fuchsia-700 ">
                <span className="font-normal   uppercase  ">Bộ sưu Tập</span>
                <div className="absolute Menu  z-50  w-full right-[11px]">
                  <div className="ml-[11px]  mt-[25px] w-full ">
                    <div className="menuchidlren bg-white  z-50 w-full   shadow-md  flex justify-center ">
                      <div className="flex  gap-[50px] flex-wrap  w-[1320px]">
                        {dataCollection.map((data) => (
                          <div key={data.id}>
                            <a className=" flex justify-start ">
                              <span className="text-black hover:border-b-[1px] h-[22px] leading-[22px] uppercase hover:border-b-black text-[14px] font-medium mb-[10px]">
                                {data.name}
                              </span>
                            </a>
                            <img src={data.src} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-between ">
            <form
              onSubmit={handleSearch}
              className="flex justify-center relative items-center w-[235px] h-[32px] border-b-[1px] border-b-slate-400"
            >
              <input
                className="outline-none border-none"
                value={value}
                placeholder="Tìm kiếm..."
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <button disabled={value === ''} type="submit">
                <BsSearch className={value === '' ? 'text-slate-400' : 'text-slate-800'} />
              </button>
            </form>
            <div className="flex">
              <button>
                <FaMapMarkerAlt className="h-[22px] ml-[22px] text-[20px] hover:text-fuchsia-700 cursor-pointer " />
              </button>

              <div className="flex justify-center items-center ml-[22px]">
                {dataUser.map((data) => (
                  <div>
                    {userId !== 'undefined' ? (
                      <button onClick={handleUserProFile} className="mt-[2px]">
                        <img
                          className="h-[24px] mt-[2px]  object-cover  w-[24px] rounded-full"
                          src={
                            data.url ||
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/2048px-OOjs_UI_icon_userAvatar-constructive.svg.png'
                          }
                        />
                      </button>
                    ) : (
                      <button onClick={handleUser}>
                        <FaRegUserCircle className="h-[22px]  text-[20px] hover:text-fuchsia-700 cursor-pointer" />
                      </button>
                    )}
                    {openUser && (
                      <div className="absolute w-[320px] h-[220px] bg-slate-200 rounded-md shadow-lg   right-[3%] top-[60px]  ">
                        <div className="flex justify-center items-center mt-[20px]">
                          <img
                            className="w-[100px] h-[100px] rounded-full  object-cover"
                            src={
                              data.url ||
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/2048px-OOjs_UI_icon_userAvatar-constructive.svg.png'
                            }
                          />
                        </div>
                        <p className="w-full text-center  text-[17px] font-semibold ">
                          {data.lastName} {data.firtName}
                        </p>
                        <div className="flex w-full mt-[18px] justify-between items-center">
                          <button
                            onClick={handleLogOutUser}
                            className="ml-[20px] w-[110px] h-[35px] bg-black text-white"
                          >
                            Đăng xuất
                          </button>

                          <a className="mr-[20px] cursor-pointer flex justify-center items-center  w-[110px] h-[35px]  ">
                            <span className="text-blue-600 leading-[18px] hover:border-b-[1px] hover:border-blue-600  ">
                              Profile
                            </span>
                            <AiOutlineSetting className="ml-[5px] text-blue-600" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button>
                <BsFillCartFill className="h-[22px] ml-[22px] text-[20px] hover:text-fuchsia-700 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
