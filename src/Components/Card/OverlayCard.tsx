import React, { ReactNode } from "react";

type OverlayCardProps = {
  image: string;
  children: ReactNode;
};

const OverlayCard: React.FC<OverlayCardProps> = ({ image, children }) => {
  return (
    <div>
      <div className="card--div">
        <img src={image} alt="" />
        <div className="card--text overlay">{children}</div>
      </div>
    </div>
  );
};

export default OverlayCard;
