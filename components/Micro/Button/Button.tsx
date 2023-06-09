import React from 'react';

type Props ={
    className:string;
    children:string
}

const Button = ({ className, children }:Props) => {
  return (
    <button className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;