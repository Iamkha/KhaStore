import React from 'react';
import SidebarAccount from './SidebarAccount';
import SumOderTotal from '../customs/SumOderTotal';
import { useEffect } from 'react';
import { getCookie } from '../cookies/Cookies';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase';
import Paging from '../customs/Paging';
import ShowItems from '../customs/ShowItems';
import { Rating } from '@mui/material';

const MyProductReview = () => {
  const [user, setUser] = useState([]);
  const [pagition, setPagition] = useState(10);
  const [paging, setPaging] = useState(1);
  const usersCollectionRef = collection(db, 'users');

  const cookiesUser = getCookie('userId');

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const dataUser = user.filter((data) => data.id === cookiesUser);
  const orderTotal = dataUser.map((data) => data.recentOrders).flat();
  const dataOrderLenght = orderTotal.length;

  const patitionLenght = Math.ceil(orderTotal.length / pagition);

  const dataMyRecentReviews = orderTotal.map((data) => data.children_data).flat();
  console.log(dataMyRecentReviews, 'dataMyRecentReviews');
  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="My Orders"></SidebarAccount>
        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]"> My Product Reviews</h1>
          <div class="border-b-[1px] border-gray-500  flex  items-baseline">
            <p class="text-[14px] text-black-333 leading-[20px] font-bold w-[10.767%] px-[10px] py-[11px]">Created</p>
            <p class="text-[14px] text-black-333 leading-[20px] font-bold w-[24.8%] px-[10px] py-[11px]">
              Product Name
            </p>
            <p class="text-[14px]  text-black-333 leading-[20px] font-bold w-[14.3%] px-[10px] py-[11px]">Rating</p>
            <p class="text-[14px]  text-black-333 leading-[20px] font-bold w-[37.85%] px-[10px] py-[11px]">Review</p>
            <p class="text-[14px] text-black-333 leading-[20px] font-bold w-[12.5%] px-[10px] py-[11px]" />
          </div>
          {dataMyRecentReviews.map((data) => (
            <div class="border-b-[1px] border-gray-500 text-black-333    flex  items-baseline">
              <p class="text-[14px] text-black-333 leading-[20px] font-normal w-[10.767%] px-[10px] py-[11px]">
                {data.created}
              </p>
              <div class="h-[19px] px-[10px] py-[11px] w-[24.8%]">
                <a href="/" class="flex text-[14px] font-normal  leading-[19px] text-blue-500 ">
                  {/* {data.name.slice(0, 30)}
									{#if data.name.length > 30}...{/if} */}
                  <p className="hover:border-b-[1px] hover:border-solid-[1px] hover:border-blue-500">
                    {data.name.slice(0, 25)}
                  </p>
                  {data.name.length > 25 && <p>...</p>}
                </a>
              </div>
              <div class="text-[14px]  text-black-333 leading-[20px] font-normal  w-[14.3%]  px-[10px] py-[11px]">
                <p class="leading-[14.28px] h-[14px]">
                  <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                </p>
              </div>
              <div class="text-[14px] flex text-black-333 leading-[20px] font-normal w-[37.85%] px-[10px] py-[11px]">
                <p>{data.review.slice(0, 49)}</p>
                {data.review.length > 49 && <p>...</p>}
              </div>
              <div class="text-[14px] text-black-333 leading-[20px] font-normal w-[12.5%] px-[10px] py-[11px]">
                <div class="flex">
                  <button>
                    <a
                      class=" text-[14px] font-normal h-[19px] leading-[19px] text-blue-500 hover:border-b-[1px] hover:border-solid-[1px] hover:border-blue-500"
                      href={`/review/customer/view/${data.created}/${data.sku.toLowerCase()}`}
                    >
                      See Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-[50px] items-center">
            <p>{dataOrderLenght} Item</p>
            <Paging paging={paging} patitionLenght={patitionLenght} setPaging={setPaging} />
            <div className="flex items-center">
              <p className="mr-[10px]">Show</p>
              <ShowItems pagition={pagition} setPagition={setPagition} />
              <p className="ml-[10px]">per page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductReview;
