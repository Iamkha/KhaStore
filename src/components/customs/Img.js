import React from 'react';
import './img.css';

const Img = ({ ...props }) => {
  const { img1, img2, handleClick = () => {} } = props;
  return (
    <div className="relative wrapper w-full h-auto">
      <div className="flex justify-start">
        <img className=" text-start img1 max-w-[224px] cursor-pointer max-h-[280px]" src={img1} />
      </div>
      <div className="img2 absolute">
        <div className="flex justify-start">
          <img className=" max-w-[224px]  relative cursor-pointer max-h-[280px]" src={img2 || img1} />
        </div>

        <a className=" flex items-center justify-center cursor-pointer  absolute bg-slate-700 bg-opacity-50 text-white top-[80%] right-[15%] w-[150px] h-[36px] ">
          <button onClick={handleClick} type="submit ">
            Mua Nhanh
          </button>
        </a>
      </div>
    </div>
  );
};

export default Img;
