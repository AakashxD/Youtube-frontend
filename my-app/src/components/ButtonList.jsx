import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const listN = ["All", "Live", "React.js", "Songs", "Cricket", "Chess", "ComputerScience"];
  
  return (
    <div className='flex'>
      {listN.map((e, index) => (
        <Button key={index} name={e} />
      ))}
    </div>
  );
};

export default ButtonList;
