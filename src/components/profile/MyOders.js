import React, { useEffect, useState } from 'react';
import SidebarAccount from './SidebarAccount';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getCookie } from '../cookies/Cookies';
import SumOderTotal from '../customs/SumOderTotal';
import Paging from '../customs/Paging';
import ShowItems from '../customs/ShowItems';

const MyOders = () => {
  const [user, setUser] = useState([]);
  const [pagition, setPagition] = useState(10);
  const [paging, setPaging] = useState(1);
  const usersCollectionRef = collection(db, 'users');

  const cookiesUser = getCookie('userId');
  console.log(user, 'user');

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
  const patitionLenght = Math.ceil(dataOrdersAcount.length / pagition);

  const dataPatition = orderTotal.filter((arr, index) => {
    if (index >= paging * pagition - pagition && index < paging * pagition) {
      return arr;
    }
  });

  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="My Orders"></SidebarAccount>
        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">My Orders</h1>
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
          {dataPatition.map((data) => (
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
                  <a
                    href={`/review/customer/order/view/${data.order}/${data.shipTo}`}
                    className=" after:content-[''] after:border-l-[1px] after:border-l-sky-500 after:h-[12px]  after:inline-block after:mx-[10px] "
                  >
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

export default MyOders;
