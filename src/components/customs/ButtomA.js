import React from 'react';

const ButtomA = ({ ...props }) => {
  const { name, a } = props;
  return (
    <a
      href={a}
      className="w-auto  px-[20px]  h-[42px] mr-[8px] border border-solid flex justify-center items-center bg-white border-black hover:text-white hover:bg-black "
    >
      <span className="uppercase border-b-[1px] leading-[14px] border-b-white">{name}</span>
    </a>
  );
};

export default ButtomA;
