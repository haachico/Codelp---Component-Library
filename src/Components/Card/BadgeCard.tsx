import React, { ReactNode } from "react";
import "./Card.css";

type BadgeCardProps = {
  badge: string;
  children: ReactNode;
};

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, children }) => {
  return (
    <div>
      <div className="card--div">
        <span className="badge">{badge}</span>

        <div className="card--text">{children}</div>
      </div>
    </div>
  );
};

export default BadgeCard;
