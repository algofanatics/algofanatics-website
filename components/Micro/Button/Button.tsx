import React from 'react';

type Props ={
  className: string;
  children: string;
  onClick?: () => Promise<any>;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
