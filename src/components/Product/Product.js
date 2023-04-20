import React, { useState } from 'react';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import './Product.css';
import ButtomA from '../customs/ButtomA';
import Img from '../customs/Img';
import Paging from '../customs/Paging';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getCookie, removeCookie, setCookie } from '../cookies/Cookies';

const Product = ({ ...props }) => {
  const [arrow, setArrow] = useState(false);
  const [count, setCount] = useState(1);

  const { data } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setArrow(!arrow);
  };
  useEffect(() => {}, []);
  const handleClick = () => {
    window.alert('anhkha');
    setCookie('user', undefined);
    setCount(count + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-end mb-[20px] h-[50px]">
        <div className="flex justify-start items-center h-full">
          <p className="mr-[10px] ">Sắp xếp theo </p>
        </div>
        <select className="selectP mt-[10px] mr-[10px]" name="arrange" id="arrange">
          <option value="location">Vị trí</option>
          <option value="name">Tên Sản Phẩm</option>
          <option value="price">Giá</option>
        </select>
        <button type="submit">{arrow ? <ImArrowUp /> : <ImArrowDown />}</button>
      </form>
      <div className="flex flex-wrap mb-[70px]  gap-7">
        {data.map((d) => (
          <div key={d.id} className="">
            <div className="mt-10">
              <Img handleClick={handleClick} data={d.src} img1={d?.src[1]?.name} img2={d.src[0].name} />
              <div className="flex flex-wrap">
                {d.src.map((p) => (
                  <div
                    key={p.id}
                    className="truncate  mt-[10px] w-[40px] h-[40px] mr-[10px] border border-solid-[1px] cursor-pointer hover:border-black"
                  >
                    <img className=" " src={p.name} />
                  </div>
                ))}
              </div>
              <div className="w-full flex mt-[3px] justify-start ">
                <a className="text-[14px]  w-full text-start ">{d.name}</a>
              </div>

              <div className="w-full flex mt-[3px] justify-start ">
                <p className="text-[14px]  w-full text-start font-semibold">{d.price}000 đ</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[70px]">
        <Paging
          arr={[
            { id: 1, name: 1 },
            { id: 2, name: 2 },
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
