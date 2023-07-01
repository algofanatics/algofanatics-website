import React from "react";

type Props = {
  className?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ className, children, onClick, disabled }: Props) => {
  return (
    <button disabled={disabled} className={`${className} border-black border hover:bg-btn` } onClick={onClick} style={{boxShadow:"-2px 6px 0px 0px rgba(0,0,0,0.9)",}}>
      {children}
    </button>
  );
};

export default Button;
