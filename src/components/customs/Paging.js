import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Paging = ({ ...props }) => {
  const [checkClass, setCheckClass] = useState(1);
  const { arr = [], paging, setPaging, handleClickPaging = () => {} } = props;
  return (
    <div className="flex justify-center items-center">
      <button className="w-[32px] text-slate-500 hover:text-black h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center">
        <MdOutlineKeyboardArrowLeft />
      </button>
      {arr.map((data) => (
        <button
          className={
            checkClass === data.name
              ? 'w-[32px] ml-[10px] text-white bg-black  h-[32px] border border-solid-[1px] border-black rounded-sm flex justify-center items-center'
              : 'w-[32px] ml-[10px] text-sky-500 h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center'
          }
          onClick={handleClickPaging}
          key={data.id}
        >
          {data.name}
        </button>
      ))}

      <button className="w-[32px] ml-[10px] text-slate-500 hover:text-black h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center">
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Paging;
