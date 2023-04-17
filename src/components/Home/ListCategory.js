import React from 'react';
import { listCategory } from '../data/fakeData';

const ListCategory = () => {
  return (
    <div className="flex gap-4  m-[10px] mb-[50px]">
      {listCategory.map((data) => (
        <a className="flex justify-center w-[620px]">
          <div key={data.id} className="relative">
            <img src={data.src} className="-z-10" />
            <div className="  absolute bg-slate-700 bg-opacity-50 h-[97px] p-[10px] top-[85.5%] w-[102%] -left-[1%]">
              <a className="flex justify-center items-center mb-[10px]">
                <p className="text-start tex-[18px] text-white font-medium">{data.name}</p>
              </a>
              <a className="flex justify-center items-center">
                <button className=" w-[110px] h-[32px] text-[15px] hover:bg-black hover:border-black text-white border-solid-[1px] border border-white bg-transparent ">
                  XEM NGAY
                </button>
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ListCategory;
