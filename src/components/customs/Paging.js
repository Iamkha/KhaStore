import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Paging = ({ ...props }) => {
  const { paging = 1, setPaging, patitionLenght } = props;

  const arr = new Array(patitionLenght);

  const dataInput = arr.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });
  const handleonClickpaginationLeft = () => {
    if (paging > 1) {
      setPaging(paging - 1);
    }
  };

  const handleonClickpaginationRight = () => {
    if (paging < arr.length) {
      setPaging(paging + 1);
    }
  };
  console.log(dataInput);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleonClickpaginationLeft}
        disabled={paging === 1}
        className="w-[32px] disabled:text-slate-400 text-slate-500 hover:text-black h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {dataInput.map((data) => (
        <button
          onClick={() => {
            setPaging(data.name);
          }}
          className={
            paging === data.name
              ? 'w-[32px] ml-[10px] text-white bg-black  h-[32px] border border-solid-[1px] border-black rounded-sm flex justify-center items-center'
              : 'w-[32px] ml-[10px] text-sky-500 h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center'
          }
          key={data.id}
        >
          {data.name}
        </button>
      ))}

      <button
        onClick={handleonClickpaginationRight}
        disabled={paging === arr.length}
        className="w-[32px] ml-[10px] disabled:text-slate-400 text-slate-500 hover:text-black h-[32px] border border-solid-[1px] rounded-sm flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Paging;
