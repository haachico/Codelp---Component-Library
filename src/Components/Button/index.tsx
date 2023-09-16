import React, { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  className?: string;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <div>
      <button className={`btn ${className}`}> {children}</button>
    </div>
  );
};

export default Button;
