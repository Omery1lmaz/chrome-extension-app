import React from 'react';

const ComponentOne = ({ list }) => {
  return (
    <div className=" flex justify-evenly w-full items-center overflow-x-auto gap-0 ">
      {list.map((item) => {
        return (
          <div className="flex py-2 justify-start items-center flex-1  cursor-pointer border-b border-borderColor">
            {item.icon}
            <span className="text-[0.5rem] font-light opacity-20">
              {item.text}
            </span>
          </div>
        );
      })}
      {/* <div className="flex py-2 justify-start items-center flex-1 cursor-pointer border-b border-borderColor">
        <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />
        <span className="text-[0.5rem] font-light opacity-20">Create Note</span>
      </div>
      <div className="flex py-2 justify-start items-center flex-1 m-0 p-0 cursor-pointer border-b border-borderColor">
        <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />
        <span className="text-[0.5rem] font-light opacity-20">Create Note</span>
      </div>
      <div className="flex py-2 justify-start items-center flex-1  cursor-pointer border-b border-white">
        <AiFillBulb className="text-xs font-light w-4 h-4 " />
        <span className="text-[0.5rem] font-light opacity-20">Create Note</span>
      </div> */}
    </div>
  );
};

export default ComponentOne;
