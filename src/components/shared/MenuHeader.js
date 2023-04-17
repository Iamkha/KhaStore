import React from 'react';

const MenuHeader = ({ ...props }) => {
  const { data, name } = props;
  const dataMenu = data.filter((data) => data.name === name);
  return (
    <div className="">
      {dataMenu.map((datas) => (
        <div key={datas.id} className="">
          <a className=" flex justify-start ">
            <span className="text-black hover:border-b-[1px] h-[22px] leading-[22px] uppercase hover:border-b-black text-[14px] font-medium mb-[10px]">
              {datas.name}
            </span>
          </a>
          {datas.chidlren_data.map((data) => (
            <div key={data.id} className="flex justify-start items-start">
              <a className="text-black h-[22px] leading-[22px] uppercase text-[14px] font-normal mb-[10px] hover:text-fuchsia-700">
                {data.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuHeader;
