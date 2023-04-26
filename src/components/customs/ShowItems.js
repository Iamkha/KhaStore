import React from 'react';

const ShowItems = ({ ...props }) => {
  const { pagition, setPagition = () => {} } = props;
  const arr = [
    { id: 1, name: 10 },
    { id: 2, name: 20 },
    { id: 3, name: 50 },
  ];
  return (
    <select
      value={pagition}
      className=" border-solid-[2px] border-[1px] w-[60px] p-[5px] h-[35px] shadow-sm outline-none cursor-pointer border-slate-400 bg-slate-200 "
      name="arrange"
      id="arrange"
      onChange={(e) => setPagition(e.target.value)}
    >
      {arr.map((data) => (
        <option key={data.id} value={data.name}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

export default ShowItems;
