import React from 'react';
import SidebarAccount from './SidebarAccount';

const AccountInformation = () => {
  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="Account Information"></SidebarAccount>

        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">Account Information</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
