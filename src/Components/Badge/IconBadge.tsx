import React from "react";
import "./Badge.css";

type IconBadgeProps = {
  size: string;
  src: string;
  name: string;
  notification: string;
};

const IconBadge: React.FC<IconBadgeProps> = ({
  size,
  src,
  name,
  notification
}) => {
  return (
    <div>
      <div className="badge--div">
        <img className={size} src={src} alt={name} />
        <div className="notification">{notification}</div>
      </div>
    </div>
  );
};

export default IconBadge;
