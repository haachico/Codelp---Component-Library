import React from "react";
import "./Avatar.css";

type AvatarProps = {
  size: string;
  src: string;
  name: string;
};

const Avatar: React.FC<AvatarProps> = ({ size, src, name }) => {
  return (
    <div>
      <img src={src} alt={name} className={`avatar ${size}`} />
    </div>
  );
};

export default Avatar;
