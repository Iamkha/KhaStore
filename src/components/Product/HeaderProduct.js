import React from 'react';

const HeaderProduct = ({ ...props }) => {
  const { title, src } = props;
  return (
    <div className="mt-[85px]">
      <h1 className="font-medium text-[24px]">{title}</h1>
      <img src={src} />
    </div>
  );
};

export default HeaderProduct;
