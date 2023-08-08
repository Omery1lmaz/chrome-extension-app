import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ComponentThree = ({ imageUrl, name }) => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center py-3 ">
        <div className="w-[40px] h-[40px]">
          <img
            alt="profile"
            className="w-full h-full rounded-full"
            src={imageUrl}
          />
        </div>
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <div className="flex justify-center items-center py-1 px-2 cursor-pointer bg-darktwo w-[32px] h-[32px] rounded-md">
        <AiOutlineClose className="w-[24px] h-[24px]" />
      </div>
    </>
  );
};

export default ComponentThree;
