import React from 'react';
import './instagramImg.css';

const InstagramImg = ({ ...props }) => {
  const { img, hoverImg } = props;
  return (
    <div className="w-[300px] wrapper cursor-pointer  h-[300px]  relative  ">
      <img className="w-full h-full object-cover img11" src={img} />
      <img className="absolute bottom-0 w-full h-full object-cover img22 " src={hoverImg} />
    </div>
  );
};

export default InstagramImg;
