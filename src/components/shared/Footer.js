import React, { useState } from 'react';
import { contact, footer, iconsFooter } from '../data/fakeData';
import { MdMarkEmailUnread } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  const [value, setValue] = useState('');
  const handleEmail = (e) => {
    e.preventDefault();
    setValue('');
    console.log(value, 'email');
  };
  return (
    <div className="mt-[30px]   ">
      <div className="bottom-0    bg-slate-600 w-full flex justify-center items-center">
        <div className="w-[1320px] flex justify-between  pt-[50px] px-[15px] ">
          <div className="w-[22%]">
            <p className="text-[16px] my-[20px] text-start text-white font-semibold">CÔNG TY CỔ PHẦN LPK.</p>
            <p className="text-[15px] my-[20px] text-start text-white font-normal">
              ĐKKD: 1920218521, ngày cấp: 28/05/2001.
            </p>
            <p className="text-[15px] my-[20px] text-start text-white font-normal">
              Sở Kế hoạch và đầu tư TP. Thừa Thiên Huế.
            </p>
            <p className="text-[15px] my-[20px] text-start text-white font-normal">
              Địa chỉ trụ sở chính: 146 Tôn Thất bách, phường Hương Vân, thị xã Hương Trà, tỉnh thừa thiên huế.
            </p>
            <img src="https://onoff.vn/media/images/bocongthuong.png" />
          </div>
          <div className="w-[48%]  flex flex-wrap justify-start gap-[20px] ">
            {footer.map((datas) => (
              <div key={datas.id} className=" w-[31%]">
                <h3 className="text-[16px]  my-[20px] text-start text-white font-semibold">{datas.name}</h3>
                {datas.chidlren_data.map((data) => (
                  <p key={data.id} className="text  text-[14px] my-[5px] text-start text-slate-400 font-light">
                    {data.name}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="w-[22%] ">
            <p className="text-[16px] my-[20px] text-start text-white font-semibold">LIÊN HỆ.</p>
            {contact.map((data) => (
              <div key={data.id} className="flex items-center text">
                <span className="text-white text-[22px] mb-[10px] mr-[20px]"> {data.icon}</span>
                <p className="text-[14px] text-white font-normal">{data.name}</p>
              </div>
            ))}
            <p className="text-[16px] my-[20px] text-start text-white font-semibold">ĐĂNG KÝ NHẬN MAIL TỪ LPK.</p>
            <div className="bg-white flex items-center h-[32px] w-auto">
              <MdMarkEmailUnread className="w-[16px] mx-[8px]" />
              <div>
                <form onSubmit={handleEmail} className="flex items-center w-full justify-between">
                  <input
                    value={value}
                    className="border-none outline-none text-[15px] w-[180px] "
                    placeholder="Nhập email của bạn ..."
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                  <button type="submit" className="h-[26px] w-[70px] text-[15px] mr-[3px] bg-slate-600 text-white">
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
            <div className="flex mt-[30px] w-full justify-start items-center ">
              {iconsFooter.map((data) => (
                <div key={data.id} className="mr-[10px]">
                  <button className=" flex  justify-center items-center bg-white rounded-full w-[40px] h-[40px]">
                    <span className="">{data.icon}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[25px] bg-slate-600 pb-[10px]">
        <div className="pt-[10px] border-t-[1px] border-t-slate-700 flex justify-center ">
          <p className="text-start w-[1320px] text-white  text-[12px] font-normal">
            © 2018 LPK Fashion. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
