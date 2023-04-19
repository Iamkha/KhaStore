import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import './newProduct.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ListCheap.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ListCheap = () => {
  const [data, setData] = useState([{ src: [] }]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `product`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, data]);

  return (
    <div>
      <div className="w-full relative  h-auto flex justify-center">
        <div className="xl:w-[1290px] w-full h-[350px] ">
          <Swiper autoHeight={true} slidesPerView={5} spaceBetween={10} className="mySwiper">
            {data.map((d, index) => (
              <div key={d.id}>
                <SwiperSlide>
                  <div className="relative wrapper w-full h-auto">
                    <img className=" img1 max-w-[224px] cursor-pointer max-h-[280px]" src={d?.src[0]?.name} />
                    <div className="img2 absolute">
                      <img className="  w-100%]  relative cursor-pointer max-h-[280px]" src={d?.src[1]?.name} />

                      <a className=" flex items-center justify-center cursor-pointer  absolute bg-slate-700 bg-opacity-50 text-white top-[80%] right-[15%] w-[150px] h-[36px] ">
                        <p>Mua Nhanh</p>
                      </a>
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
      <div className="w-full relative  h-auto flex justify-center mt-[70px]">
        <div>
          <img src="https://onoff.vn/media/import/banneronoff/Web/banner/banner-quan-ao-2209.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ListCheap;
