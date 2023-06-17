import React from "react";

type Props = {
  className: string;
  children: string;
  onClick?: () => void;
  disabled?:boolean
};

const Button = ({ className, children, onClick, disabled}: Props) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
