import React, { useEffect, useState } from 'react';
import SidebarAccount from './SidebarAccount';
import { Rating } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getCookie } from '../cookies/Cookies';
import SumOderTotal from '../customs/SumOderTotal';

const MyAccount = () => {
  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const cookiesUser = getCookie('userId');

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const dataUser = user.filter((data) => data.id == cookiesUser);
  const orderTotal = dataUser.map((data) => data.recentOrders).flat();
  const dataOrderLenght = orderTotal.length;
  const dataOrdersAcount = orderTotal
    .filter((arr, index) => {
      if (index > dataOrderLenght - 6) {
        return arr;
      }
    })
    .reverse();
  const dataMyRecentReviews = orderTotal.map((data) => data.children_data).flat();
  const dataMyRecentReviewsLenght = dataMyRecentReviews.length;
  const dataMyRecentReviewsAcount = dataMyRecentReviews
    .filter((arr, index) => {
      if (index > dataMyRecentReviewsLenght - 3) {
        return arr;
      }
    })
    .reverse();
  console.log(dataMyRecentReviewsAcount);

  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="My Account"></SidebarAccount>
        <div className="w-full pl-[20px] mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">My Account</h1>
          <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
            <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Account Information</p>
          </div>
          <div className="flex justify-between mb-[50px]">
            <div className="w-[48%] ">
              <p className="text-[18px] font-bold mb-[10px]">Contact Information</p>
              {dataUser.map((data) => (
                <div key={data.id}>
                  <p>
                    {data.lastName} {data.firtName}
                  </p>
                  <p>{data.email}</p>
                </div>
              ))}

              <div className="mt-[10px]">
                <a className=" after:content-[''] after:border-l-[1px] after:border-l-sky-500 after:h-[12px]  after:inline-block after:mx-[10px] ">
                  <span className="text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                    Edit
                  </span>
                </a>
                <a className="  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                  Change Password
                </a>
              </div>
            </div>
            <div className="w-[48%]">
              <p className="text-[18px] font-bold mb-[10px]">Newsletters</p>
              <p>You aren't subscribed to our newsletter.</p>
              <a className=" mt-[10px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                Edit
              </a>
            </div>
          </div>
          <div className="boder flex border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]   ">
            <p className="text-[22px]  leading-[29px]  font-light">Address Book</p>
            <a className=" mt-[10px] leading-[15px]  ml-[10px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
              Manage Addresses
            </a>
          </div>
          <div className="flex justify-between mb-[50px]">
            <div className="w-[48%] ">
              <p className="text-[18px] font-bold mb-[10px]">Default Billing Address</p>
              {dataUser.map((data) => (
                <div key={data.id}>
                  <p>
                    {data.lastName} {data.firtName}
                  </p>
                  <p>{data.defaultBillingAddress.road}</p>
                  <p>{data.defaultBillingAddress.wards}</p>
                  <p>{data.defaultBillingAddress.town}</p>
                  <p>{data.defaultBillingAddress.city}</p>
                  <p>{data.defaultBillingAddress.country}</p>
                  <div className="flex">
                    <p>T:</p>
                    <a className=" leading-[23px] ml-[10px] text-[16px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                      {data.defaultBillingAddress.phone}
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-[10px]">
                <a className="  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                  Edit Address
                </a>
              </div>
            </div>
            <div className="w-[48%]">
              <p className="text-[18px] font-bold mb-[10px]">Default Shipping Address</p>
              {dataUser.map((data) => (
                <div key={data.id}>
                  <p>
                    {data.lastName} {data.firtName}
                  </p>
                  <p>{data.defaultBillingAddress.road}</p>
                  <p>{data.defaultBillingAddress.wards}</p>
                  <p>{data.defaultBillingAddress.town}</p>
                  <p>{data.defaultBillingAddress.city}</p>
                  <p>{data.defaultBillingAddress.country}</p>
                  <div className="flex">
                    <p>T:</p>
                    <a className=" leading-[23px] ml-[10px] text-[16px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                      {data.defaultBillingAddress.phone}
                    </a>
                  </div>
                </div>
              ))}
              <a className=" mt-[10px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                Edit Address
              </a>
            </div>
          </div>
          <div className="boder flex border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]   ">
            <p className="text-[22px]  leading-[29px]  font-light">My Recent Reviews</p>
            <a className=" mt-[10px] leading-[15px]  ml-[10px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
              View All
            </a>
          </div>
          <div className="mb-[50px]">
            {dataMyRecentReviewsAcount.map((data) => (
              <div className="mb-[15px]">
                <a className=" mt-[10px] leading-[15px]   text-[16px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                  {data.name}
                </a>
                <div className=" flex">
                  <p className="font-bold mr-[10px]">Rating:</p>
                  <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                </div>
              </div>
            ))}
          </div>
          <div className="boder flex border-b-[1px] border-b-slate-400 py-[10px]   ">
            <p className="text-[22px]  leading-[29px]  font-light">Recent Orders</p>
            <a
              href="/sales/order/history"
              className=" mt-[10px] leading-[15px]  ml-[10px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500"
            >
              View All
            </a>
          </div>
          <div className="border-b-[1px] border-b-slate-400  flex  items-baseline">
            <p className="text-[14px] text-black-333 leading-[20px] font-bold w-[15.067%] px-[10px] py-[11px]">
              Order #
            </p>
            <p className="text-[14px] text-black-333 leading-[20px] font-bold w-[12%] px-[10px] py-[11px]">Date</p>
            <p className="text-[14px]  text-black-333 leading-[20px] font-bold w-[18.62%] px-[10px] py-[11px]">
              Ship To
            </p>
            <p className="text-[14px]  text-black-333 leading-[20px] font-bold w-[16.05%] px-[10px] py-[11px]">
              Order Total
            </p>
            <p className="text-[14px] text-black-333 leading-[20px] font-bold w-[12.4%] px-[10px] py-[11px]">Status</p>
            <p className="text-[14px]  text-black-333 leading-[20px] font-bold w-[26.067%] px-[10px] py-[11px]">
              Action
            </p>
          </div>

          {dataOrdersAcount.map((data) => (
            <div key={data.id} className="border-b-[1px] border-b-slate-400  text-black-333   flex  items-baseline">
              <p className="text-[14px] text-black-333 leading-[20px] font-normal w-[15.067%] px-[10px] py-[11px]">
                #00000{data.order}
              </p>
              <p className="text-[14px] text-black-333 leading-[20px] font-normal w-[12%] px-[10px] py-[11px]">
                {data.date}
              </p>
              <p className="text-[14px]  text-black-333 leading-[20px] font-normal w-[18.62%] px-[10px] py-[11px]">
                {data.shipTo}
              </p>
              <p className="text-[14px] text-black-333 leading-[20px] font-normal w-[16.05%] px-[10px] py-[11px]">
                <SumOderTotal shipping={data.shipping} arrData={data.children_data} />
              </p>
              <p className="text-[14px] text-black-333 leading-[20px] font-normal w-[12.4%] px-[10px] py-[11px]">
                {data.status}
              </p>
              <div className="text-[14px] text-black-333 leading-[20px] font-normal w-[26.067%] px-[10px] py-[11px]">
                <div className="flex">
                  <a className=" after:content-[''] after:border-l-[1px] after:border-l-sky-500 after:h-[12px]  after:inline-block after:mx-[10px] ">
                    <span className="text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                      View Order
                    </span>
                  </a>
                  <a className=" leading-[19px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
                    Reorder
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
