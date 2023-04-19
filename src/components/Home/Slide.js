import { child, get, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slide.css';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper';
import { database } from '../../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slide() {
  const [data, setData] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `slide`))
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
  console.log(data);

  const dataProduct = data.filter((d) => d.for === 'nam');

  return (
    <div className=" flex w-full ml-[-9px] h-[793px] items-center">
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        FreeMode={true}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        {data.map((data, index) => (
          <div key={data.id}>
            <SwiperSlide>
              <img className="h-full w-auto" src={data.src} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;
