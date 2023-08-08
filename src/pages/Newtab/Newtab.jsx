import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMagic } from 'react-icons/fa';
import { AiFillBulb } from 'react-icons/ai';
import Button from '../../Components/Buttons/Button/Button';
import FullWButton from '../../Components/Buttons/FullWButton/FullWButton';
import ComponentOne from '../../Components/ComponentOne/ComponentOne';
import ComponentTwo from '../../Components/ComponentTwo/ComponentTwo';
import ComponentThree from '../../Components/ComponentThree/ComponentThree';
const list = [
  {
    icon: <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />,
    text: 'Create Note',
  },
  {
    icon: <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />,
    text: 'Create Note',
  },
  {
    icon: <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />,
    text: 'Create Note',
  },
  {
    icon: <AiFillBulb className="text-xs font-light w-4 h-4 opacity-20" />,
    text: 'Create Note',
  },
];
const buttons = [
  {
    text: 'Professional',
  },
  {
    text: 'Informational',
  },
  {
    text: 'Casual',
  },
];
const buttons1 = [
  {
    text: 'Short',
  },
  {
    text: 'Medium',
  },
  {
    text: 'Long',
  },
];
const Newtab = () => {
  return (
    <div className="bg-dark min-h-[350px] overflow-auto text-white py-2 flex flex-col gap-4">
      <div className="px-2">
        <div className="flex justify-between items-center border-b border-borderColor">
          <ComponentThree
            name={'Dan Corkill'}
            imageUrl={
              'https://th.bing.com/th/id/R.0e7fbc2bf4e25dbba86ffd5f30416ead?rik=lCci2Ok1AGNcBg&pid=ImgRaw&r=0'
            }
          />
        </div>
      </div>
      <div className="px-2">
        <div className="w-full min-h-250px flex justify-center items-center rounded-md py-14 border-borderColor border">
          <div className="flex flex-col gap-1 max-w-[141px] text-white opacity-40 justify-center items-center font-extralight text-xs text-center">
            <FaMagic className="" />
            <span className="">Preview will be generated here</span>
          </div>
        </div>
      </div>
      <div className="bg-underlineColor h-[5px]"></div>
      <div className="px-2">
        <ComponentOne list={list} />
      </div>
      <div className="p-2 mx-2 border-borderColor border rounded-sm flex flex-col gap-2">
        <ComponentTwo
          name={'Choose Tone'}
          icon={<FaMagic className="" />}
          buttons={buttons}
        />
      </div>
      <div className="p-2 mx-2 border-borderColor border rounded-sm flex flex-col gap-2">
        <ComponentTwo
          name={'Paragraph Length'}
          icon={<FaMagic className="" />}
          buttons={buttons1}
        />
      </div>
      <div className=" mx-2  flex flex-col gap-2">
        <div className="flex leading-2 w-full text-[0.6rem] font-normal justify-start items-center gap-2">
          <FaMagic className="" />
          <span>Input Command</span>
        </div>
        <input
          type="text"
          className="w-full bg-transparent border-borderColor border rounded-sm min-h-[50px]"
        />
      </div>
      <div className="mx-2">
        <FullWButton name={'Generate Draft'} />
      </div>
    </div>
  );
};

export default Newtab;
