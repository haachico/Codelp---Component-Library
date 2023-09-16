import React, { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`card--div ${className}`}>
      <div className="card--text">{children}</div>
    </div>
  );
};

export default Card;
