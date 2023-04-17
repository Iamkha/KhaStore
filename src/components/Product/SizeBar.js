import React from 'react';
import './SizeBar.css';
import WrapperSizebar from './WrapperSizebar';
import WrapperSizebarSize from './WrapperSizebarSize';

const SizeBar = ({ ...props }) => {
  const { title, categoryData, colorData, materialData, sizeData } = props;
  return (
    <div className="w-[23%]  mr-[50px] justify-center items-center">
      <div>
        <div className="flex justify-center h-full  items-start my-[30px]">
          <a href="/" className="uppercase text-gray-400 text-[12px] afterLink  ">
            trang chủ
          </a>
          <p className="text-[12px] uppercase">Sản phẩm {title}</p>
        </div>
        <WrapperSizebar title={'Danh mục'} arr={categoryData} />
        <WrapperSizebar title={'MÀU SẮC'} arr={colorData} />
        <WrapperSizebarSize title={'KÍCH CỠ'} arr={sizeData} />
        <WrapperSizebar title={'CHẤT LIỆU'} arr={materialData} />
      </div>
    </div>
  );
};

export default SizeBar;
