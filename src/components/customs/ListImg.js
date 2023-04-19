import React from 'react';

const ListImg = ({ ...props }) => {
  const { data } = props;
  return (
    <div>
      <div className="flex flex-wrap">
        {data.map((p, index) => (
          <div
            key={index}
            className="truncate  mt-[10px] w-[40px] h-[40px] mr-[10px] border border-solid-[1px] cursor-pointer hover:border-black"
          >
            <img className=" " src={p.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListImg;
