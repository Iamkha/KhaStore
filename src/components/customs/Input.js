import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  const { id, errors, showPassword = true, name, value, setonChange, placeholder, onBlur } = props;
  return (
    <div>
      <p className="nameInput font-[15px]">{name}</p>
      <input
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onBlur={onBlur}
        onChange={setonChange}
        className={
          errors
            ? 'border border-solid text-[14px] h-[32px] outline-none   border-red-600 focus:border-solid-[1.5px] w-full px-[10px]  '
            : 'border border-solid text-[14px] h-[32px] outline-none focus:border-cyan-600 focus:border-solid-[1.5px] w-full px-[10px] '
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
