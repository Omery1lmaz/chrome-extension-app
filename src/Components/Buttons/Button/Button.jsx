import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="bg-btnPrimary px-2 py-1 rounded-md text-[0.5rem] font-medium">
      {name}
    </button>
  );
};

export default Button;
