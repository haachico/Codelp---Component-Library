import React, { ReactNode } from "react";

type DismissCardProps = {
  children: ReactNode;
};

const DismissCard: React.FC<DismissCardProps> = ({ children }) => {
  return (
    <div>
      <div className="card--div">
        <button className="close--btn">x</button>

        <div className="card--text">{children}</div>
      </div>
    </div>
  );
};

export default DismissCard;
