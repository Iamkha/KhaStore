import React from 'react';

const Notification = () => {
  return (
    <div className="flex justify-center items-center bg-slate-600 text-white text-[15px] h-[42px] gap-5">
      <p>Miễn phí vận chuyển cho ĐH 499k</p>
      <a className="text-[13px] border-b-[1px] border-b-white cursor-pointer">Xem chi tiết</a>
    </div>
  );
};

export default Notification;
