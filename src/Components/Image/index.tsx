import React from "react";
import "./Image.css";

type ImageProps = {
  image: string;
  name: string;
  className: string;
  size?: string;
};

const Image: React.FC<ImageProps> = ({ image, name, className, size }) => {
  return (
    <div>
      <img src={image} className={`${className} ${size}`} alt={name} />
    </div>
  );
};

export default Image;
