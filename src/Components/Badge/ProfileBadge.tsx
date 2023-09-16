import React from "react";
import "./Badge.css";

type ProfileBadgeProps = {
  size: string;
  src: string;
  name: string;
  status: string;
};

const ProfileBadge: React.FC<ProfileBadgeProps> = ({
  size,
  src,
  name,
  status
}) => {
  return (
    <div>
      <div className="badge--div">
        <img className={size} src={src} alt={name} />
        <div className={status}></div>
      </div>
    </div>
  );
};

export default ProfileBadge;
