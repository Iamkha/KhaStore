import React from 'react';

const CheckInput = ({ ...props }) => {
  const { type = 'checkbox', showPassword = false, id, onChange = () => {}, title } = props;
  return (
    <div>
      <input
        type={type}
        checked={showPassword}
        onChange={(e) => onChange(e.target.checked)}
        className="inputCheck"
        id={id}
      />
      <label for={id} className="titleCheck ml-[15px] cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default CheckInput;
