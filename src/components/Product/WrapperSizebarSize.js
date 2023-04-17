import React, { useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const WrapperSizebarSize = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const { title, arr } = props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full border-b-[1px] pt-[10px] mx-[10px] pb-[10px]">
      <button onClick={handleClick} className="flex justify-between text-[16px] uppercase w-full items-center">
        {title} <div>{open ? <AiOutlineUp /> : <AiOutlineDown />}</div>
      </button>
      <div>
        {open && (
          <div className="py-[10px] ease-in-out flex flex-wrap gap-3">
            {arr.map((data) => (
              <div key={data.id}>
                <button className=" hover:border-black text-[12px] w-[46px] h-[46px] border border-solid cursor-pointer mt-[10px] ease-in-out text-slate-600 ">
                  {data.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WrapperSizebarSize;
