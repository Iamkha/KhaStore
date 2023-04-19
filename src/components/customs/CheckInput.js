import React from 'react';

const CheckInput = ({ ...props }) => {
  const { showPassword = false, id, onChange = () => {}, title } = props;
  return (
    <div>
      <input
        type="checkbox"
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
