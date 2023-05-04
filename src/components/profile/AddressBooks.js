import React, { useEffect, useState } from 'react';
import SidebarAccount from './SidebarAccount';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getCookie } from '../cookies/Cookies';

const AddressBooks = () => {
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
  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="Address Book"> </SidebarAccount>
        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">Address Book</h1>
          <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
            <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Address Book</p>
          </div>
          <div className="flex justify-between mb-[50px]">
            <div className="w-[48%] ">
              <p className="text-[18px] font-bold mb-[10px]">Default Billing Address</p>
              {dataUser.map((data) => (
                <div>
                  {data.defaultBillingAddress !== undefined ? (
                    <div key={data.id}>
                      <p>{data.defaultBillingAddress.fullName}</p>
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
                  ) : (
                    <div>
                      <p class="text-[14px] text-black-333333 h-[24px] leading-[24px]">
                        You have not set a default billing address.
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="">
                <a
                  href="/customer/address/new"
                  className="  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500"
                >
                  Change Billing Address
                </a>
              </div>
            </div>
            <div className="w-[48%]">
              {dataUser.map((data) => (
                <div>
                  <p className="text-[18px] font-bold mb-[10px]">Default Shipping Address</p>
                  {data.defaultBillingAddress !== undefined ? (
                    <div key={data.id}>
                      <p>{data.defaultBillingAddress.fullName}</p>
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
                  ) : (
                    <div>
                      <p class="text-[14px] text-black-333333 h-[24px] leading-[24px]">
                        You have not set a default shipping address.
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/customer/address/new"
                className="  text-[14px] text-sky-500 cursor-pointer hover:border-b-[1px] hover:border-b-sky-500"
              >
                Change Shipping Address
              </a>
            </div>
          </div>
          <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
            <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Address Book</p>
          </div>
          <p className="mb-[50px] text-[14px]">You have no other address entries in your address book.</p>
          <a
            href="/customer/address/new"
            className="font-semibold text-white bg-sky-700 hover:bg-sky-600 px-[15px] py-[7px]"
          >
            Edit Address
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddressBooks;
