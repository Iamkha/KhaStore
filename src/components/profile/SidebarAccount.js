import React from 'react';
import { dataSidebarAccount } from '../data/fakeData';
import { useState } from 'react';

const SidebarAccount = ({ ...props }) => {
  const { title } = props;
  const [classAccount, setClassAccount] = useState(title);
  return (
    <div className=" pr-[20px]  ">
      <div className="w-[251px] bg-slate-100 py-[20px]">
        {dataSidebarAccount.map((data) => (
          <div id={data.id} className="">
            {data.name !== '' && (
              <div className="flex">
                {classAccount === data.name && <p class="bg-red-400 w-[3px] h-[30px]" />}
                <a
                  onClick={() => setClassAccount(data.name)}
                  className={
                    classAccount === data.name
                      ? ' text-start w-full   text-black py-[5px] pr-[18px] pl-[12px] font-semibold cursor-auto mt-0  mb-0 my-auto'
                      : ' classAccount text-start hover:bg-slate-300 w-full text-neutral-600 font-normal cursor-pointer  py-[5px] pr-[18px] pl-[15px]'
                  }
                  href={data.a}
                >
                  {data.name}
                </a>
              </div>
            )}

            <div className="px-[10px]"> {data.name === '' && <p className="h-[1px] bg-black my-[5px] "></p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarAccount;
