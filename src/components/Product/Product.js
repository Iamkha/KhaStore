import React, { useState } from 'react';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import './Product.css';
import ButtomA from '../customs/ButtomA';
import Img from '../customs/Img';
import Paging from '../customs/Paging';

const Product = ({ ...props }) => {
  const [arrow, setArrow] = useState(false);
  const {
    arrImg = [
      { img: 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18IA22A022-SW001.jpg' },
      { img: 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18IA22A022-SK001.jpg' },
    ],
  } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setArrow(!arrow);
  };
  const handleClick = () => {
    window.alert('anhkha');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-end mb-[20px] h-[50px]">
        <div className="flex justify-start items-center h-full">
          <p className="mr-[10px] ">Sắp xếp theo </p>
        </div>
        <select className="mt-[10px] mr-[10px]" name="arrange" id="arrange">
          <option value="location">Vị trí</option>
          <option value="name">Tên Sản Phẩm</option>
          <option value="price">Giá</option>
        </select>
        <button type="submit">{arrow ? <ImArrowUp /> : <ImArrowDown />}</button>
      </form>
      <div className="flex flex-wrap mb-[70px]">
        <div className="">
          <Img
            img1={'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18IA22A022-SW001.jpg'}
            img2={'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18IA22A022-SK001.jpg'}
          />

          <div className="flex mt-[10px]">
            {arrImg.map((data) => (
              <div className="truncate w-[40px] h-[40px] mr-[10px] border border-solid-[1px] cursor-pointer hover:border-black">
                <img className=" " src={data.img} />
              </div>
            ))}
          </div>
          <div className="w-full flex mt-[3px] justify-start ">
            <a className="text-[14px]  w-full text-start ">kha</a>
          </div>

          <div className="w-full flex mt-[3px] justify-start ">
            <p className="text-[14px]  w-full text-start font-semibold">37.000 đ</p>
          </div>
        </div>
      </div>
      <div className="mb-[70px]">
        <Paging
          arr={[
            { id: 1, name: 1 },
            { id: 1, name: 2 },
          ]}
        />
      </div>
      <div className="flex justify-center items-center mb-[70px]">
        <ButtomA a={''} name="SẢN PHẨM ĐẶC BIỆT" />
        <ButtomA a={''} name="ĐỒ Lót" />
        <ButtomA a={''} name="QUẦN ÁO" />
        <ButtomA a={''} name="BÍT TẤT" />
      </div>
    </div>
  );
};

export default Product;
