import React from 'react';

const SumOderTotal = ({ ...props }) => {
  const { arrData, shipping = 0 } = props;
  const initialValue = 0;
  const sumOrderTotal = arrData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qtv * currentValue.price,
    initialValue,
  );
  return <div>{sumOrderTotal + shipping}.000 đ</div>;
};

export default SumOderTotal;
