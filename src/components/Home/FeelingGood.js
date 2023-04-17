import React from 'react';
import './FeelingGood.css';
import ButtomA from '../customs/ButtomA';
import Logo from '../../images/Logo.png';

const FeelingGood = () => {
  return (
    <div className="mt-[70px] w-full">
      <h1 className="w-full text-center text-[48px] font-extrabold mt-[20px] mb-[35px]">Feeling good</h1>
      <div className="w-full flex justify-center items-center ">
        <p className="font-normal text-[25px] w-[550px] text-center mb-[70px]">
          Thương hiệu LPK mang tới trải nghiệm thoải mái mỗi ngày cho mọi người.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-between w-[67.7%] ">
          <div className="relative">
            <img src="https://onoff.vn/media/import/banneronoff/Web/tencel-2021-01.jpg" />
            <div className="absolute bottom-[0px] feelingGoodImg w-full h-[190px] px-[25px] pb-[30px]">
              <h1 className="font-semibold text-white text-[25px] my-[20px]">COTTON TENCEL</h1>
              <p className="text-white text-[15px]">
                Chất liệu Cotton tencel là sự kết hợp hài hòa giữa Tencel và Cotton giúp phát huy tối đa ưu điểm của mỗi
                loại chất liệu: Sự mềm mại, cảm giác mát lạnh, độ bền và khả năng định hình phom dáng cùng tính năng
                kháng khuẩn tự nhiên.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="https://onoff.vn/media/import/banneronoff/Web/cotton-2021-01.jpg" />
            <div className="absolute bottom-[0px] feelingGoodImg w-full h-[190px] px-[25px] pb-[30px]">
              <h1 className="font-semibold text-white text-[25px] my-[20px]">COTTON USA</h1>
              <p className="text-white text-[15px]">
                Cotton USA được ví như loại chất liệu “biết thở” – Breathable bởi khả năng thấm hút vượt trội cùng cơ
                chế làm mát tự nhiên giúp cân bằng độ ẩm, đảm bảo an toàn cho vùng da nhạy cảm sẽ giúp bạn luôn thoải
                mái với mọi trang phục ngay cả trong những ngày hè oi bức.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[20px] mb-[150px] ">
        <div className="flex justify-between w-[67.7%] ">
          <div className="w-[49%] flex">
            <ButtomA a={''} name="nam" />
            <ButtomA a={''} name="nữ" />
          </div>
          <div className="w-[49%] flex">
            <ButtomA a={''} name="nam" />
            <ButtomA a={''} name="nữ" />
            <ButtomA a={''} name="Trẻ Em" />
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="https://onoff.vn/static/version1673509780/frontend/Of/default/en_US/images/store.jpg" />
        <div className="absolute right-[21%] bottom-0 bg-black w-[15%] h-[100%] flex justify-center items-center">
          <p className="text-white text-[45px] font-extrabold">KHA+</p>
        </div>
      </div>
      <div className="my-[50px]">
        <p className="w-full text-center font-normal text-[26px] mb-[20px] ">THEO DÕI CHÚNG TÔI TRÊN INSTAGRAM</p>
      </div>
    </div>
  );
};

export default FeelingGood;
