import React, { useEffect, useState } from 'react';
import Logo from '../../images/Logo.png';
import { FaRegUserCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';
import './Header.css';
import { dataMale, dataFemale, dataChildren, dataCollection } from '../data/fakeData';
import MenuHeader from './MenuHeader';
import { getCookie, setCookie } from '../cookies/Cookies';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(value, 'value');
    setValue('');
  };
  const cookiesUser = getCookie('user');
  useEffect(() => {
    setUser(cookiesUser);
  }, [user]);

  const handleUser = () => {
    if (cookiesUser === undefined) {
      alert('Bạn đã đăng nhập rồi nhé!');
    } else {
      navigate('/customer/account/login');
    }
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
              className="flex justify-center items-center w-[235px] h-[32px] border-b-[1px] border-b-slate-400"
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
                <FaMapMarkerAlt className="h-[22px] ml-[22px] text-[20px] hover:text-fuchsia-700 cursor-pointer" />
              </button>
              {user === undefined ? (
                'kha'
              ) : (
                <button onClick={handleUser}>
                  <FaRegUserCircle className="h-[22px] ml-[22px] text-[20px] hover:text-fuchsia-700 cursor-pointer" />
                </button>
              )}
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
