import React from 'react';
import SidebarAccount from './SidebarAccount';
import { useLocation } from 'react-router-dom';

const ReviewDetails = () => {
  const location = useLocation();
  console.log(location.pathname.split('/'));
  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="My Orders"></SidebarAccount>
        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">Reviews Details</h1>
          <div>
            <div className="flex">
              <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/4/7/796660/Ronaldo.jpg" />
              <div>
                <p>name</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
