import React from 'react';

const Card = (props) => {
  return (
    <div className="max-w-3xl mt-4 mx-auto px-3 py-4 flex flex-col bg-[#2c2d30] shadow-sm rounded-lg">
      {props.children}
    </div>
  );
};

export default Card;
