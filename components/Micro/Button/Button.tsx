import React from "react";

type Props = {
  className?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ className, children, onClick, disabled }: Props) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
