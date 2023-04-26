import React from 'react';

const Subtotal = ({ ...props }) => {
  const { arrData } = props;
  const initialValue = 0;
  const sumOrderTotal = arrData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qtv * currentValue.price,
    initialValue,
  );
  return <div>{sumOrderTotal}.000 đ</div>;
};

export default Subtotal;
