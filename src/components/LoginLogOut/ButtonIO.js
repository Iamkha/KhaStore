import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './ButtonIO.css';

const ButtonIO = ({ ...props }) => {
  const { loading = false, disabled = false, type = 'submit', name, onClick = () => {} } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className="w-[150px] h-[40px] bg-black text-white text-[16px] hover:bg-cyan-900  "
    >
      {loading ? (
        <p className="loading flex justify-center items-center">
          <AiOutlineLoading3Quarters />
        </p>
      ) : (
        name
      )}
    </button>
  );
};

export default ButtonIO;
