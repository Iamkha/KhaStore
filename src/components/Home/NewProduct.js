import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import './newProduct.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const NewProduct = () => {
  const [data, setData] = useState([{ src: [] }]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `product`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val(), 'data2');
          setData(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, data]);
  console.log(data, 'data');
  return (
    <div className="mb-[70px]">
      <h3 className="mb-[40px] text-[26px] w-full text-center">SẢN PHẨM MỚI</h3>
      <div className="w-full flex justify-center">
        <div className="w-[67.7%] h-[350px] ">
          <Swiper
            autoHeight={true}
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((d, index) => (
              <div key={index}>
                <SwiperSlide>
                  <div className="w-full h-auto">
                    <div className="relative">
                      <img className="max-w-[224px] max-h-[280px]" src={d?.src[0]?.name} />
                      <div className="absolute flex justify-center right-11 top-3 items-center rounded-full bg-red-800 text-white w-[40px] h-[40px]">
                        <p className="text-[14px] uppercase font-semibold">new</p>
                      </div>
                    </div>
                    <div className="w-full flex mt-[3px] justify-start ">
                      <a className="text-[14px]  w-full text-start uppercase">{d.name}</a>
                    </div>
                    <div className="w-full flex mt-[3px] justify-start ">
                      <p className="text-[14px]  w-full text-start font-semibold">{d.price}.000 đ</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
