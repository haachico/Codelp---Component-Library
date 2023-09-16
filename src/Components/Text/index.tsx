import "./Text.css";
import React, { ReactNode } from "react";

type TextProps = {
  className: string;
  children: ReactNode;
};

const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <div>
      <p className={className}>{children}</p>
    </div>
  );
};

export default Text;
