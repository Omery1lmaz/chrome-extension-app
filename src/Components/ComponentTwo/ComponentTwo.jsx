import React from 'react';
import Button from '../Buttons/Button/Button';

const ComponentTwo = ({ icon, name, buttons }) => {
  return (
    <>
      <div className="flex leading-2 w-full text-[0.6rem] font-light justify-start items-center gap-2">
        {icon}
        <span>{name}</span>
      </div>
      <div className="flex gap-2 justify-start items-center">
        {buttons.map((button) => {
          return <Button name={button.text} />;
        })}
      </div>
    </>
  );
};

export default ComponentTwo;
