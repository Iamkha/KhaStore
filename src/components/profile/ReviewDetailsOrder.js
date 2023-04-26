import React, { useEffect, useLayoutEffect, useState } from 'react';
import SidebarAccount from './SidebarAccount';
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getCookie } from '../cookies/Cookies';
import Subtotal from '../customs/Subtotal';
import SumOderTotal from '../customs/SumOderTotal';

const ReviewDetailsOrder = () => {
  const [user, setUser] = useState([]);

  console.log(user, 'user');
  const location = useLocation();
  // console.log(location.pathname.split('/')[5].split('%20').join(''));

  const usersCollectionRef = collection(db, 'users');

  const cookiesUser = getCookie('userId');

  useLayoutEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const dataUser = user.filter((data) => data.id === cookiesUser);
  const orderTotal = dataUser.map((data) => data.recentOrders).flat();
  const dataReviewDetails = orderTotal.filter((data) => data.order === Number(location.pathname.split('/')[5]));

  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="My Orders"></SidebarAccount>
        <div className="w-full pl-[20px]  mb-[100px]">
          <div className="flex items-center mb-[30px]">
            <h1 className="text-[40px] font-light ">My Orders #00000{location.pathname.split('/')[5]}</h1>

            {dataReviewDetails.map((data) => (
              <p className="ml-[30px] uppercase border-[2px] rounded-sm py-[3px] px-[8px] border-solid border-zinc-300">
                {data.status}
              </p>
            ))}
          </div>

          {dataReviewDetails.map((data) => (
            <p className="mb-[10px]">{data.date}</p>
          ))}
          <a className=" leading-[19px]  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500">
            Reorder
          </a>
          <div className="flex">
            <p className="w-[150px] border-[1px] border-solid flex justify-center items-center border-gray-400 h-[42px] border-b-[0px]  mt-[20px]">
              Items Ordered
            </p>
            <div className="border-b-[1px] w-full border-gray-400"></div>
          </div>
          <div className="border-[1px] border-solid  border-gray-400 border-t-[0px] p-[20px] ">
            <div class="w-full flex ">
              <p class=" w-[37.6%] text-[14px]  pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                Product Name
              </p>
              <p class=" w-[20.18%] text-[14px]  pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">SKU</p>
              <p class=" w-[13.7%] text-end text-[14px]  pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                Price
              </p>
              <p class=" w-[15.2%]  text-end text-[14px]  pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                Qty
              </p>
              <p class=" w-[13.6%]  text-end text-[14px]  pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                Subtotal
              </p>
            </div>
            {dataReviewDetails.map((data) => (
              <div>
                {data.children_data.map((d) => (
                  <div class="w-full flex border-solid border-t-[1px] border-gray-ccc ">
                    <div class="pt-[16px] pb-[20px] px-[10px] w-[37.6%] ">
                      <p class=" text-[18px]   font-normal pb-[10px] ">{d.name}</p>
                      <div class="mb-[15px]">
                        <p class="  font-bold text-[14px] leading-[20px]">Size</p>
                        <p class="  font-normal text-[14px] leading-[20px]">{d.size}</p>
                      </div>
                      <div>
                        <p class="  font-bold text-[14px] leading-[20px]">Color</p>
                        <p class="  font-normal text-[14px] leading-[20px]">{d.color}</p>
                      </div>
                    </div>
                    <p class=" w-[20.18%] text-[14px]   py-[20px] px-[10px] font-normal leading-[20.5px]">{d.sku}</p>
                    <p class=" w-[13.7%] text-end text-[18px] text-dark-gray pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                      {d.price}.000 đ
                    </p>
                    <p class=" w-[15.2%]  text-end text-[14px]  pt-[16px] pb-[11px] px-[10px] font-normal leading-[20.5px]">
                      Ordered: {d.qtv}
                    </p>
                    <p class=" w-[13.7%] text-end text-[18px] text-dark-gray pt-[16px] pb-[11px] px-[10px] font-bold leading-[20.5px]">
                      {d.qtv * d.price}.000đ
                    </p>
                  </div>
                ))}
              </div>
            ))}
            <div class="w-full flex bg-slate-100 border-solid border-b-[1px] border-slate-400 mb-[30px]">
              <div class="w-full">
                <p class="w-[full] h-[51px] pt-[20px] px-[10px] pb-[11px] text-end text-[14px]  font-normal leading-[20.5px]">
                  Subtotal
                </p>
                <p class="w-[full] h-[42px]  px-[10px] py-[11px] text-end text-[14px]  font-normal leading-[20.5px]">
                  Shipping & Handling
                </p>
                <p class="w-[full] h-[42px]  px-[10px] py-[11px] text-end text-[14px]  font-bold leading-[20.5px]">
                  Grand Total
                </p>
              </div>
              {dataReviewDetails.map((data) => (
                <div>
                  <p class="w-[112.81px] h-[51px] pt-[20px] px-[10px] pb-[11px] text-end text-[14px]  font-normal leading-[20.5px]">
                    <Subtotal arrData={data.children_data} />
                  </p>
                  <p class="w-[112.81px] h-[42px]  px-[10px] py-[11px] pb-[11px] text-end text-[14px]  font-normal leading-[20.5px]">
                    {data.shipping}.000đ
                  </p>
                  <p class="w-[112.81px] h-[42px]  px-[10px] py-[11px] pb-[11px] text-end text-[14px]  font-bold leading-[20.5px]">
                    <SumOderTotal shipping={data.shipping} arrData={data.children_data} />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div class="boder-[1px] border-b-[1px] border-b-slate-600  mt-[30px] py-[10px] mb-[25px] flex  items-baseline">
            <p class="text-[22px]  leading-[29px]  font-light">Order Information</p>
          </div>
          <div class="w-full flex justify-between mb-[50px]">
            <div class="w-[50%]">
              <p class="text-[16px]  font-bold h-[22px] leading-[22px] mb-[10px]">Shipping Address</p>

              {/* {#if dataAccount.length == 0}
						<p class="text-[14px]  h-[24px] leading-[24px]">
							You have not set a Shipping Address.
						</p>
					{:else} */}
              {dataUser.map((data) => (
                <div className="text-[14px]" key={data.id}>
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
            </div>
            <div class="w-[50%] flex justify-start ">
              <div class="m-0 p-0">
                <p class="text-[14px]  font-bold h-[22px] leading-[22px] mb-[10px]">Shipping Method</p>

                <p class="text-[14px]  h-[24px] leading-[24px]">Flat Rate - Fixed</p>
              </div>
            </div>
            <div class="w-[50%] flex justify-start ">
              <div class="m-0 p-0">
                <p class="text-[14px]  font-bold h-[22px] leading-[22px] mb-[10px]">Billing Address</p>

                {/* {#if dataAccount.length == 0}
							<p class="text-[14px]  h-[24px] leading-[24px]">
								You have not set a Billing Address.
							</p>
						{:else} */}
                {dataUser.map((data) => (
                  <div className="text-[14px]" key={data.id}>
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
              </div>
            </div>
            <div class="w-[50%] flex justify-start ">
              <div class="m-0 p-0">
                <p class="text-[14px]  font-bold h-[22px] leading-[22px] mb-[10px]">Payment Method</p>

                <p class="text-[14px]  h-[24px] leading-[24px]">Check / Money order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsOrder;
